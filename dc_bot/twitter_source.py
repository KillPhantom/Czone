from mongoengine import Document
import mongoengine.fields as f


class TwitterSource(Document):

    meta = {"allow_inheritance": True}

    user_name = f.StringField(required=True)
    is_deleted = f.BooleanField(default=False)

    @classmethod
    def get_all_sources(cls):
        sources = cls.objects(is_deleted=False)
        return [source.user_name for source in sources]

    @classmethod
    def delete_twitter_source(cls, user_name):
        cls.objects(user_name=user_name).update(is_deleted=True)

    @classmethod
    def add_source(cls, user_name):
        source = cls(user_name=user_name)
        source.save()