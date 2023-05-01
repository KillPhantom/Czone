from mongoengine import Document
import mongoengine.fields as f


class AddressType:
    CONTRACT_ADDRESS = 1
    USER_ADDRESS = 2


class Address(Document):

    meta = {"allow_inheritance": True}

    address_hash = f.StringField(required=True, max_length=42)
    contract_name = f.StringField(required=True)
    address_type = f.IntField(default=AddressType.USER_ADDRESS, required=True)
    is_selected = f.BooleanField(default=False)

    # @classmethod
    # def get_all_contract_address(cls):
    #     cls.objects(is_contract_address=True)

    def to_dict(self):
        return {
            "hash": self.address_hash,
            "name": self.contract_name,
            "is_contract_address": self.address_type == AddressType.CONTRACT_ADDRESS,
            "is_selected": self.is_selected,
        }

    @classmethod
    def by_hash(cls, hash):
        address = cls.objects(address_hash=hash)
        if not address:
            return None
        return address[0]

