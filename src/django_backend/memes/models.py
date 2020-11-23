from django.db import models
from django.conf import settings


class Meme(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='memes/', default='default.jpg')
    likes = models.IntegerField(default=0)
    title = models.CharField(default='title', max_length=150, null=False, unique=True)

    def __str__(self):
        return self.title
