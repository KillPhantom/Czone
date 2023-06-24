from mongoengine import Document
import mongoengine.fields as f


class CompanySizeType:
    LESS_THAN_10 = 1
    LESS_THAN_50 = 2
    LESS_THAN_100 = 3
    LESS_THAN_500 = 4
    MORE_THAN_500 = 5


class InterestedTopicType:
    COMPANY_STRUCTURE = "company"
    COMPANY_EMPLOYEE = "employee"
    COMPANY_RECRUITMENT = "recruitment"


class CompanyInfo(Document):

    meta = {"allow_inheritance": True}

    company_name = f.StringField(required=True)
    contact_name = f.StringField(required=True)
    contact_number = f.StringField(required=True)
    contact_email = f.StringField(required=True)
    company_size = f.IntField(default=CompanySizeType.LESS_THAN_10, required=True)
    topic = f.StringField(default=InterestedTopicType.COMPANY_STRUCTURE, required=True)


    def to_dict(self):
        return {
            "company_name": self.company_name,
            "contact_name": self.contact_name,
            "contact_email": self.contact_email,
            "contact_number": self.contact_number,
            "company_size": self.company_size,
            "topic": self.topic,
        }

