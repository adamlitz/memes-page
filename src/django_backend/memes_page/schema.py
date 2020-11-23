import graphene
from memes import schema

from graphene_django.debug import DjangoDebug


class Query(
            schema.Query,
            graphene.ObjectType
):
    debug = graphene.Field(DjangoDebug, name="_debug")


class Mutation(
    schema.Mutation,
    graphene.ObjectType
):
    debug = graphene.Field(DjangoDebug, name="_debug")


schema = graphene.Schema(query=Query, mutation=Mutation)
