import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay import from_global_id

from .models import Meme
from .utils import to_internal_value
from .filters import MemeFilter

from django.contrib.auth import get_user_model
User = get_user_model()


class MemeNode(DjangoObjectType):
    class Meta:
        model = Meme
        filter_fields = []
        interfaces = (relay.Node, )


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = []
        interfaces = (relay.Node, )


class Query(graphene.ObjectType):
    meme = relay.Node.Field(MemeNode)
    all_memes = DjangoFilterConnectionField(MemeNode, filterset_class=MemeFilter)

    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)


class CreateMeme(relay.ClientIDMutation):
    meme = graphene.Field(MemeNode)

    class Input:
        image = graphene.String()
        title = graphene.String()

    def mutate_and_get_payload(root, info, **input):
        user = info.context.user or None

        # Allow anonymous user to add meme
        if str(user) == 'AnonymousUser':
            user = None

        # Decode image from base64
        encoded_image = input.get('image')
        decoded_image = to_internal_value(encoded_image)

        meme = Meme(
            image=decoded_image,
            title=input.get('title'),
            author=user
        )
        meme.save()

        return CreateMeme(meme=meme)


class UpVoteMeme(relay.ClientIDMutation):
    meme = graphene.Field(MemeNode)

    class Input:
        meme = graphene.ID()

    def mutate_and_get_payload(root, info, **input):
        try:
            meme = Meme.objects.get(
                pk=int(from_global_id(input.get('meme'))[1])
            )
        except Meme.DoesNotExist:
            return None

        # Increment likes value
        meme.likes += 1
        meme.save()

        return UpVoteMeme(meme=meme)


class Mutation(graphene.AbstractType):
    create_meme = CreateMeme.Field()
    upvote_meme = UpVoteMeme.Field()
