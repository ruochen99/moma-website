from django.http import HttpResponse  
from django.views import View
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework import generics
from .serializers import VideoSerializer, ImageSerializer, EntitySerializer, RelationshipSerializer, AttributeSerializer, FilterSerializer
from .models import Video, Image, Entity, Relationship, Attribute, Filter
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
from rest_framework import status

from django.http import HttpResponse, Http404
import json


@api_view(['GET', 'POST'])
def videos(request):
	try:	
		videos = Video.objects.all()
		videos_serializer = VideoSerializer(videos, many=True)
		print(videos_serializer.data)
		return JsonResponse(videos_serializer.data, safe=False)
	except Exception as e:
		print (e) 
	# if request.method == 'GET':
	# elif request.method == 'POST':
	# 	video_data = JSONParser().parse(request)
	# 	video_serializer = VideoSerializer(data=video_data)
	# 	video_serializer.save()
	# 	return JsonResponse(video_serializer.data, status=status.HTTP_201_CREATED)


def render_to_json(obj):
    return HttpResponse(json.dumps(obj, default=str), content_type="application/json")

@api_view(['GET'])
def filters(request):
	defaults = Filter.objects.all()
	activity = list(defaults.filter(category="activity").order_by("name"))
	sub_activity = list(defaults.filter(category="sub_activity").order_by("name"))
	actor = list(defaults.filter(category="actor").order_by("name"))
	objects = list(defaults.filter(category="object").order_by("name"))
	atomic_action = list(defaults.filter(category="atomic_action").order_by("name"))
	relationship = list(defaults.filter(category="relationship").order_by("name"))

	filters = {
		"activity": activity, 
        "sub_activity": sub_activity, 
        "actor": actor,
        "object": objects,
        "atomic_action": atomic_action,
        "relationship": relationship,
	}

	for f in filters:
		filters[f] = [ob.as_json() for ob in filters[f]]

	return render_to_json(filters)



class VideoView(generics.CreateAPIView):
	queryset = Video.objects.all()
	serializer_class = VideoSerializer

class ImageView(generics.CreateAPIView):
	queryset = Image.objects.all()
	serializer_class = ImageSerializer

class EntityView(generics.CreateAPIView):
	queryset = Entity.objects.all()
	serializer_class = EntitySerializer

class RelationshipView(generics.CreateAPIView):
	queryset = Relationship.objects.all()
	serializer_class = RelationshipSerializer

class AttributeView(generics.CreateAPIView):
	queryset = Attribute.objects.all()
	serializer_class = AttributeSerializer

class FilterView(generics.CreateAPIView):
	queryset = Filter.objects.all()
	serializer_class = FilterSerializer






