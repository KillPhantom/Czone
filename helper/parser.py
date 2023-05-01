# import pandas as pd
# import json


# class Parser:
#     def __init__(self):
#         pass

#     def _convert_wei_to_ether(self, wei):
#         # 10-9
#         return int(wei) * pow(10, -9)

#     @classmethod
#     def convert_gwei_to_ether(self, gwei):
#         return int(gwei) * pow(10, -18)

#     @classmethod
#     def convert_hex_to_decimal(self, data):
#         if not data:
#             return 0
#         return int(data, 16)

#     @classmethod
#     def parse_token_transfer_events(self, events):
#         result = []
#         for event in events:
#             if not isinstance(event, dict):
#                 continue
#             nonce = event["nonce"]

#             # value , transaction fee, max_fee_per_gas need change to ether
#             gas_price = self.convert_gwei_to_ether(event["gasPrice"])
#             token_name = event["tokenName"]
#             token_symbol = event["tokenSymbol"]
#             token_value = int(event["value"])
#             token_decimal = int(event["tokenDecimal"])
#             transaction_fee = gas_price * int(event["gasUsed"])

#             parsed_events = {
#                 "transaction_hash": event["hash"],
#                 "from_address": event["from"],
#                 "to_address": event["to"],
#                 "block_number": self.convert_hex_to_decimal(event["blockNumber"]),
#                 "transaction_index": self.convert_hex_to_decimal(
#                     event["transactionIndex"]
#                 ),
#                 "gas_price": gas_price,
#                 "nonce": nonce,
#                 "timestamp": event["timeStamp"],
#                 "token_name": token_name,
#                 "token_symbol": token_symbol,
#                 "token_transfer_number": token_value * pow(10, -token_decimal),
#                 "contract_address": event["contractAddress"],
#                 "transaction_fee": transaction_fee,
#             }
#             result.append(parsed_events)
#         return result

#     @classmethod
#     def parse_transactions(self, transactions):
#         result = []
#         for txn in transactions:
#             gas = self.convert_hex_to_decimal(txn["gas"])
#             nonce = self.convert_hex_to_decimal(txn["nonce"])

#             # value , transaction fee, max_fee_per_gas need change to ether
#             gas_price = self.convert_gwei_to_ether(
#                 self.convert_hex_to_decimal(txn["gasPrice"])
#             )
#             value = self._convert_wei_to_ether(
#                 self, self.convert_hex_to_decimal(txn["value"])
#             )

#             parsed_txn = {
#                 "transaction_hash": txn["hash"],
#                 "from_address": txn["from"],
#                 "to_address": txn["to"],
#                 "block_number": self.convert_hex_to_decimal(txn["blockNumber"]),
#                 "transaction_index": self.convert_hex_to_decimal(
#                     txn["transactionIndex"]
#                 ),
#                 "value": self._convert_wei_to_ether(self, value),
#                 "gas_price": gas_price,
#                 "nonce": nonce,
#                 "type": txn["type"],
#             }

#             if txn.get("tokenName"):
#                 parsed_txn.update(
#                     {
#                         "token_name": txn["tokenName"],
#                         "token_symbol": txn["tokenSymbol"],
#                         "token_transfer_number": txn["tokenValue"],
#                         "contract_address": txn["contractAddress"],
#                         "transaction_fee": gas_price * int(txn["totalGasUsed"]),
#                     }
#                 )

#             result.append(parsed_txn)
#         return result

#     def convert_to_csv(self):
#         parsed_file = self.parse_transactions(self.file)
#         pd.read_json(json.dumps(parsed_file)).to_csv(
#             "parsed_recent_block_transactions.csv"
#         )

