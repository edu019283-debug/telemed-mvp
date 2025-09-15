from rest_framework import viewsets, permissions
from .models import Appointment, Consent, Encounter
from .serializers import AppointmentSerializer, ConsentSerializer, EncounterSerializer

class IsAuthenticatedOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in ('GET',):
            return True
        return request.user and request.user.is_authenticated

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all().order_by('-created_at')
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ConsentViewSet(viewsets.ModelViewSet):
    queryset = Consent.objects.all().order_by('-accepted_at')
    serializer_class = ConsentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class EncounterViewSet(viewsets.ModelViewSet):
    queryset = Encounter.objects.all().order_by('-created_at')
    serializer_class = EncounterSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
