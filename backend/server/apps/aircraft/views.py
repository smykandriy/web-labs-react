from rest_framework import viewsets, status
from rest_framework.response import Response

from server.apps.aircraft.models import Helicopter
from server.apps.aircraft.serializers import HelicopterSerializer


class HelicopterViewSet(viewsets.ModelViewSet):
    queryset = Helicopter.objects.all()
    serializer_class = HelicopterSerializer
