from django.db import models


class Helicopter(models.Model):
    model = models.CharField(max_length=30)
    weight = models.PositiveIntegerField()
    fuel_capacity = models.PositiveIntegerField()
    max_altitude = models.PositiveIntegerField()
    take_off_weight = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
