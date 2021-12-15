from rest_framework import serializers
from .models import Video, Image, Entity, Relationship, Attribute, Filter


class EntitySerializer(serializers.ModelSerializer):
	image = serializers.PrimaryKeyRelatedField(many=False, queryset=Image.objects.all())
	class Meta:
		model = Entity
		fields = ('id', 'text', 'left', 'top', 'width', 'height', 'image')

class RelationshipSerializer(serializers.ModelSerializer):
	# entities = EntitySerializer(read_only=True, many=True)
	image = serializers.PrimaryKeyRelatedField(many=False, queryset=Image.objects.all())
	entities = serializers.JSONField()
	class Meta:
		model = Relationship
		fields = ('id', 'image', 'text', 'entities', 'image')

class AttributeSerializer(serializers.ModelSerializer):
	# entities = EntitySerializer(read_only=True, many=True)
	image = serializers.PrimaryKeyRelatedField(many=False, queryset=Image.objects.all())
	entities = serializers.JSONField()
	class Meta:
		model = Attribute
		fields = ('id', 'image', 'text', 'entities', 'image')

class ImageSerializer(serializers.ModelSerializer):
	attributes = AttributeSerializer(read_only=True, many=True)
	relationships = RelationshipSerializer(read_only=True, many=True)
	entities = EntitySerializer(read_only=True, many=True)
	video = serializers.PrimaryKeyRelatedField(many=False, queryset=Video.objects.all())
	class Meta:
		model = Image
		fields = ('id', 'sub_activity', 'image_id', 'time_stamp', 'url', 'attributes', 'relationships', 'entities', 'video')

class VideoSerializer(serializers.ModelSerializer):
	images = ImageSerializer(read_only=True, many=True)
	class Meta:
		model = Video
		fields = ('id', 'activity', 'activity_class', 'images')

class FilterSerializer(serializers.ModelSerializer):
	class Meta:
		model = Filter
		fields = ('id', 'category', 'name')



