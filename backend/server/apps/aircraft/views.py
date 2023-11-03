from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from server.apps.aircraft.models import Helicopter
from server.apps.aircraft.serializers import HelicopterSerializer


class HelicopterViewSet(viewsets.ModelViewSet):
    queryset = Helicopter.objects.all()
    serializer_class = HelicopterSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["weight", "max_altitude", "take_off_weight", "price"]

    def get_queryset(self):
        queryset = self.queryset.all()
        model = self.request.query_params.get("model")
        if model is not None:
            queryset = queryset.filter(model__icontains=model)
        return queryset
