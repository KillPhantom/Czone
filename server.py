import tornado.ioloop
import tornado.web
from handler.save_company_info import SaveCompanyInfoHandler
from mongoengine import connect


# settings = {
#     "template_path": os.path.join(
#         Path(os.path.dirname(__file__)).parent.absolute(), "cozy/public"
#     ),
#     "autoreload": True,
# }
# MTAzMzUxNTIyMDE5MjIwNjk1OA.Gt4N3w.2Xz3IlBwqm0-eKg6UWsJ-3wunY1XT2Zbm_1d74 Discord

ROUTE_MAPPING = [
    (r"/api/save-info", SaveCompanyInfoHandler),
]


def make_app():
    return tornado.web.Application(ROUTE_MAPPING)


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    connect(db="companyInfo", host="localhost", port=27017)
    print("server has started")
    tornado.ioloop.IOLoop.current().start()
