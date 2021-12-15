from django.urls import path
from django.conf.urls import url
from . import views
from .views import VideoView, ImageView, EntityView, AttributeView, RelationshipView, FilterView

urlpatterns = [
    # url(r'test', views.videos),
    url(r'explore/filters/$', views.filters),
    url(r'explore/videos/$', views.videos),
    path('test/video', VideoView.as_view()),
    path('test/image', ImageView.as_view()),
    path('test/entity', EntityView.as_view()),
    path('test/attribute', AttributeView.as_view()),
    path('test/relationship', RelationshipView.as_view()),
    path('test/filter', FilterView.as_view())
    
]
