import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'telemed.settings')
django_asgi_app = get_asgi_application()
from core import consumers
application = ProtocolTypeRouter({
    'http': django_asgi_app,
    'websocket': AuthMiddlewareStack(
        URLRouter([
            path('ws/chat/<room_name>/', consumers.ChatConsumer.as_asgi())
        ])
    )
})
