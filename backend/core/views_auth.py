from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class RegisterView(APIView):
    def post(self, request):
        data = request.data
        full_name = data.get('full_name') or ''
        email = data.get('email')
        password = data.get('password')
        if not email or not password:
            return Response({'detail':'email e senha obrigatórios'}, status=400)
        username = email.split('@')[0]
        if User.objects.filter(username=username).exists():
            username = f"{username}{User.objects.count()+1}"
        user = User.objects.create(
            username=username,
            email=email,
            first_name=full_name.split(' ')[0] if full_name else '',
            last_name=' '.join(full_name.split(' ')[1:]) if full_name else '',
            password=make_password(password)
        )
        return Response({'id': user.id, 'username': user.username, 'email': user.email}, status=status.HTTP_201_CREATED)
