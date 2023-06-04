import tornado.ioloop
import tornado.web
from handler.save_company_info import SaveCompanyInfoHandler
from handler.home_page_handler import HomePageHandler
from mongoengine import connect


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/api/save-info", SaveCompanyInfoHandler),
            (r"/", HomePageHandler),
            (r"/demo", HomePageHandler),
        ]
        settings = {
            "template_path": "web/dist/",
            "static_path": "web/dist/",
        }
        tornado.web.Application.__init__(self, handlers, **settings)


def make_app():
    return Application()


if __name__ == "__main__":
    app = make_app()
    app.listen(8080)
    connect(db="companyInfo", host="localhost", port=27017)
    print("server has started")
    tornado.ioloop.IOLoop.current().start()
