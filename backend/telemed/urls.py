from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core import views
router = routers.DefaultRouter()
router.register(r'appointments', views.AppointmentViewSet, basename='appointment')
router.register(r'consents', views.ConsentViewSet, basename='consent')
router.register(r'encounters', views.EncounterViewSet, basename='encounter')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth/', include('core.auth_urls')),
]
