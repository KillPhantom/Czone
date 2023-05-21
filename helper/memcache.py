
from pymemcache.client.base import Client

class MemcacheClient():

    def __init__(self):
        self.instance = Client('localhost')