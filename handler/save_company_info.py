from handler.base_handler import BaseHandler
import json
from data.model.company_Info import CompanyInfo
from helper.email import send_email
import logging
logging.getLogger().setLevel(logging.INFO)


class SaveCompanyInfoHandler(BaseHandler):
    def post(self):
        request_body = json.loads(self.request.body)
        company_info = request_body.get("surveyForm")
        if company_info:
            company_name = company_info.get("companyName")
            contact_name = company_info.get("contactName")
            contact_number = company_info.get("contactNumber")
            contact_email = company_info.get("contactEmail")
            company_size = int(company_info.get("companySize"))
            topic = company_info.get("topic")
            try:
                company_info = CompanyInfo(
                    company_name=company_name,
                    contact_name=contact_name,
                    contact_number=contact_number,
                    company_size=company_size,
                    contact_email=contact_email,
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
            logging.info("New inquiry has been submitted --- " + contact_number + "---" + contact_name + '---' + company_name)
        except Exception as e:
            logging.warning(e)
        self.write({"data": "success"})
