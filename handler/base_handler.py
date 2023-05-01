from tornado.web import RequestHandler
import json


def _convert_param(param, _type):
    if _type == bool:
        if param in (True, "True", "true"):
            param = True
        elif param in (False, "False", "false"):
            param = False
        else:
            raise TypeError("%s is not a valid boolean" % param)
    if _type == int:
        if not param:
            return param
        try:
            param = int(param)
        except:
            raise TypeError("%s is not a valid number " % param)
    if _type == str:
        return str(param).strip()
    return param


class BaseHandler(RequestHandler):
    def get_param(self, param, _type=None, default=None):
        param = self.get_argument(param, default)
        if not param and default:
            return default
        return _convert_param(param, _type=_type)

    def get_post_param(self, param, _type=None):
        request_body = json.loads(self.request.body)
        return _convert_param(request_body.get(param), _type)

