from django.db import models
import json


# Create your models here.
class Video(models.Model):
	activity = models.CharField(max_length=200, null=True, blank=True)
	activity_class = models.CharField(max_length=100, null=True, blank=True)
	# def as_json(self):
	# 	return dict(
	# 		activity=self.activity,
	# 		images=self.images
	# 	)
		
		
class Image(models.Model):
	video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='images')
	sub_activity = models.CharField(max_length=200, null=True, blank=True)
	image_id = models.CharField(max_length=1024, null=True, blank=True)
	time_stamp = models.CharField(max_length=100, null=True, blank=True)
	url = models.CharField(max_length=500, null=True, blank=True)

class Attribute(models.Model):
	image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='attributes')
	text = models.CharField(max_length=200, null=True, blank=True)
	entities = models.CharField(max_length=1000, null=True, blank=True)
	def set_entities(self, x):
		self.entities = json.dumps(x)
	def get_entities(self):
		return json.loads(self.entities)

class Relationship(models.Model):
	image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='relationships')
	text = models.CharField(max_length=200, null=True, blank=True)
	entities = models.CharField(max_length=1000, null=True, blank=True)
	def set_entities(self, x):
		self.entities = json.dumps(x)
	def get_entities(self):
		return json.loads(self.entities)

class Entity(models.Model):
	image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='entities')
	text = models.CharField(max_length=100, null=True, blank=True)
	left = models.IntegerField(null=True, blank=True)
	top = models.IntegerField(null=True, blank=True)
	width = models.IntegerField(null=True, blank=True)
	height = models.IntegerField(null=True, blank=True)

class Filter(models.Model):
	category = models.CharField(max_length=255, default='custom')
	name = models.CharField(max_length=255)

	def as_json(self):
		return dict(
			id=self.id,
			name=self.name,
			category=self.category,
			)




