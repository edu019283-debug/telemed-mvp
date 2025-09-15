# Backend (Django + DRF + Channels)

## Setup rápido (dev)
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```

Endpoints principais:
- `POST /auth/register/`
- `POST /auth/jwt/create/` (SimpleJWT)
- `GET/POST /api/appointments/`
- `GET/POST /api/consents/`
- `GET/POST /api/encounters/`

WebSocket (chat de sala - mock): `ws://localhost:8000/ws/chat/<room_id>/`
