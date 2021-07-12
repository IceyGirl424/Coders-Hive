from django.urls import path
from . import views

urlpatterns = [
    path('delete/tag', views.delete_tag, name="delete_tag")
]