from handler.base_handler import BaseHandler
import json
from data.model.company_Info import CompanyInfo
from helper.email import send_email
import logging


class SaveCompanyInfoHandler(BaseHandler):
    def post(self):
        request_body = json.loads(self.request.body)
        company_info = request_body.get("surveyForm")
        if company_info:
            company_name = company_info.get("companyName")
            contact_name = company_info.get("contactName")
            contact_number = company_info.get("contactNumber")
            company_size = int(company_info.get("companySize"))
            topic = company_info.get("topic")
            try:
                company_info = CompanyInfo(
                    company_name=company_name,
                    contact_name=contact_name,
                    contact_number=contact_number,
                    company_size=company_size,
                    topic=topic,
                )
                company_info.save()
            except Exception as e:
                pass

        try:
            send_email(
                subject="New company info was sent",
                message=json.dumps(company_info.to_dict()),
            )
        except Exception as e:
            logging.info(e)
        self.write({"data": "success"})
