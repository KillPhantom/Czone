from handler.base_handler import BaseHandler
import json
from data.model.address import Address, AddressType


class GetSelectedContractAddressHandler(BaseHandler):
    def get(self):
        is_contract = self.get_param("is_contract", _type=bool)

        address_type = (
            AddressType.CONTRACT_ADDRESS if is_contract else AddressType.USER_ADDRESS
        )
        addresses = Address.objects(address_type=address_type)
        result = [address.to_dict() for address in addresses]

        self.write({"data": result})


class AddAddressHandler(BaseHandler):
    def post(self):

        address_hash = self.get_post_param("address_hash")
        contract_name = self.get_post_param("contract_name")
        is_contract = self.get_post_param("is_contract_address", _type=bool)

        address = Address.by_hash(address_hash)
        if address:
            address.contract_name = contract_name
        else:
            address = Address(
                address_hash=address_hash,
                contract_name=contract_name,
                address_type=AddressType.CONTRACT_ADDRESS
                if is_contract
                else AddressType.USER_ADDRESS,
            )
        address.save()


class SaveAddressSelectionHandler(BaseHandler):
    def post(self):
        request_body = json.loads(self.request.body)
        updated_addresses = request_body.get("addresses")

        for update_address in updated_addresses:
            address = Address.by_hash(update_address.get("hash"))
            if not address:
                continue
            address.is_selected = update_address.get("is_selected")
            address.save()


class DeleteAddressHandler(BaseHandler):
    def post(self):
        address_hash = self.get_post_param("hash")
        address = Address.by_hash(address_hash)
        if address:
            address.delete()
