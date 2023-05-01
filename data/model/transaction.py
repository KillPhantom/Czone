from mongoengine import Document
import mongoengine.fields as f
from datetime import datetime


class Transaction(Document):
    meta = {"allow_inheritance": False}

    contract_address = f.StringField(db_field="ca", required=False)
    block_number = f.IntField(db_field="bn", required=False)
    gas_price = f.StringField(db_field="gp", required=False)
    nonce = f.IntField(db_field="nonce", required=False)
    to_address = f.StringField(db_field="ta", required=False)
    from_address = f.StringField(db_field="fa", required=False)
    transaction_index = f.IntField(db_field="ti", required=False)
    transaction_hash = f.StringField(db_field="th", required=False)
    token_name = f.StringField(db_field="tn", required=False)
    token_symbol = f.StringField(db_field="ts", required=False)
    token_transfer_number = f.StringField(db_field="trn", required=False)
    transaction_fee = f.StringField(db_field="tf", required=False)
    transaction_type = f.StringField(db_field="type", required=False)
    value = f.FloatField(db_field="value", required=False)  # Ether transferred
    timestamp = f.StringField(db_filed="time", required=False)

    @classmethod
    def save_transaction(
        cls,
        transaction_hash,
        to_address,
        from_address,
        transaction_index,
        nonce,
        block_number,
        gas_price,
        type,
        value,
        transaction_fee=0,
        contract_address=None,
        token_name=None,
        token_symbol=None,
        token_transfer_number=None,
    ):
        transaction = cls(
            transaction_fee=transaction_fee,
            transaction_hash=transaction_hash,
            token_name=token_name,
            token_symbol=token_symbol,
            token_transfer_number=token_transfer_number,
            contract_address=contract_address,
            to_address=to_address,
            from_address=from_address,
            value=value,
            transaction_type=type,
            gas_price=gas_price,
            block_number=block_number,
            nonce=nonce,
            transaction_index=transaction_index,
        )
        transaction.save()

    def to_dict(self):
        timestamp = (
            str(datetime.utcfromtimestamp(int(self.timestamp)))
            if self.timestamp
            else "None"
        )
        return {
            "transaction_fee": self.transaction_fee,
            "transaction_hash": self.transaction_hash,
            "token_name": self.token_name,
            "token_symbol": self.token_symbol,
            "token_transfer_number": self.token_transfer_number,
            "contract_address": self.contract_address,
            "to_address": self.to_address,
            "from_address": self.from_address,
            "value": self.value,
            "type": self.transaction_type,
            "gas_price": self.gas_price,
            "block_number": self.block_number,
            "nonce": self.nonce,
            "transaction_index": self.transaction_index,
            "timestamp": timestamp,
        }
