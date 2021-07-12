from django.db import models
from account.models import CustomUser

# Create your models here.


class Categories(models.Model):
    tag = models.CharField(max_length=100)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.tag
