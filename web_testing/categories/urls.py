from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_category, name='add_category'),
    path('show/tags', views.show_tags, name='show_tags'),
]