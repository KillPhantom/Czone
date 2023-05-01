import tornado.ioloop
import tornado.web
import logging
from handler.address_handler import (
    GetSelectedContractAddressHandler,
    AddAddressHandler,
    SaveAddressSelectionHandler,
    DeleteAddressHandler,
)
from handler.transaction_handler import GetTransactionHandler
from handler.fetch_tweets_handler import FetchTweetsHandler
from mongoengine import connect


# settings = {
#     "template_path": os.path.join(
#         Path(os.path.dirname(__file__)).parent.absolute(), "cozy/public"
#     ),
#     "autoreload": True,
# }
# MTAzMzUxNTIyMDE5MjIwNjk1OA.Gt4N3w.2Xz3IlBwqm0-eKg6UWsJ-3wunY1XT2Zbm_1d74 Discord

ROUTE_MAPPING = [
    (r"/page-detail", GetSelectedContractAddressHandler),
    (r"/api/fetch-users-tweets", FetchTweetsHandler),
    (r"/save-address-selection", SaveAddressSelectionHandler),
    (r"/delete-address", DeleteAddressHandler),
    (r"/get-transactions", GetTransactionHandler),
]


def make_app():
    return tornado.web.Application(ROUTE_MAPPING)


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    connect(db="cucre", host="localhost", port=27017)
    print("server has started")
    tornado.ioloop.IOLoop.current().start()
