from handler.base_handler import BaseHandler
from data.model.transaction import Transaction
from data.model.address import Address
from ethererum.ethereum import EtherScan
from ethererum.get_erc20_token_txn import EtherScanTokenTransaction
from data.model.address import AddressType
from mongoengine.queryset.visitor import Q
from memcache.memcache import MemCacheClient, MemCacheKey

class GetTransactionHandler(BaseHandler):
    def get(self):
        api_key = self.get_param("api_key")
        start_block_number = self.get_param("start_block_number", _type=int)
        print(start_block_number)
        end_block_number = self.get_param("end_block_number", _type=int)
        address_type = self.get_param(
            "address_type", default=AddressType.CONTRACT_ADDRESS, _type=int
        )
        # drop collections for testing purpose
        Transaction.drop_collection()
        ether_client = EtherScan(api_key)
        ether_token_client = EtherScanTokenTransaction(api_key, 0)
        if end_block_number is None:
            end_block_number = ether_client.get_most_recent_block()
        if start_block_number is None:
            start_block_number = end_block_number - 10000

        # To be use in next version
        # memcache = MemCacheClient()
        # last_query_end_block_number = memcache.get_cache(
        #     MemCacheKey.LAST_END_BLOCK_NUMBER
        # )
        # if last_query_end_block_number:
        #     if end_block_number <= int(last_query_end_block_number):
        #         self.set_status(500, "no new information")
        #         return
        #     start_block_number = max(
        #         int(last_query_end_block_number), start_block_number
        #     )
        # memcache.set_cache(MemCacheKey.LAST_END_BLOCK_NUMBER, end_block_number)

        # selected_addresses = Address.objects(
        #     Q(address_type=address_type) & Q(is_selected=True)
        # )
        # total_record = 0
        # for address in selected_addresses:
        #     response = ether_token_client.get_all_token_transfer_by_address_blocks(
        #         address.address_hash,
        #         0,
        #         is_contract=(address_type == AddressType.CONTRACT_ADDRESS),
        #         start_block_number=start_block_number,
        #         end_block_number=end_block_number,
        #     )

        #     parsed_result = Parser.parse_token_transfer_events(response)
        #     if parsed_result:
        #         Transaction.objects.insert(
        #             doc_or_docs=[Transaction(**data) for data in parsed_result]
        #        )

        transactions = Transaction.objects().order_by("-timestamp")

        self.write({"transactions": [t.to_dict() for t in transactions]})
