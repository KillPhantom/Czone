from handler.base_handler import BaseHandler

class HomePageHandler(BaseHandler):
    def get(self):
        self.render("index.html")