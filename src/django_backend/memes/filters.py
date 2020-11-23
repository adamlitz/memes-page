from django_filters import FilterSet, OrderingFilter
from .models import Meme


class MemeFilter(FilterSet):
    """
    Return memes in descending order, from newest to oldest
    """
    class Meta:
        model = Meme
        fields = []

    order_by = OrderingFilter(
        fields=(
            'date_added',
        )
    )
