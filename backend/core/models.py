from django.db import models
from django.contrib.auth.models import User

class Consent(models.Model):
    TYPE_CHOICES = (('lgpd','LGPD'),('telemed','Telemed'),('marketing','Marketing'))
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    version = models.CharField(max_length=20)
    accepted_at = models.DateTimeField(auto_now_add=True)
    ip = models.CharField(max_length=64, blank=True, null=True)
    user_agent = models.TextField(blank=True, null=True)

class Appointment(models.Model):
    CHANNEL_CHOICES = (('whatsapp','WhatsApp'),('chat','Chat'),('video','Vídeo'))
    STATUS_CHOICES = (('requested','Solicitado'),('confirmed','Confirmado'),('completed','Concluído'),('cancelled','Cancelado'),('no_show','No-show'))
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments_patient')
    clinician = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='appointments_clinician')
    scheduled_start = models.DateTimeField()
    scheduled_end = models.DateTimeField(blank=True, null=True)
    channel = models.CharField(max_length=16, choices=CHANNEL_CHOICES)
    status = models.CharField(max_length=16, choices=STATUS_CHOICES, default='requested')
    reason = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Encounter(models.Model):
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE, related_name='encounter', null=True, blank=True)
    subjective = models.TextField(blank=True, null=True)
    objective = models.TextField(blank=True, null=True)
    assessment = models.TextField(blank=True, null=True)
    plan = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
