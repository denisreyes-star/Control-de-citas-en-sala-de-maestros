PYTHON
from django.db import connection
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

@api_view(["GET"])
@permission_classes([AllowAny])
def health(request):
    """Comprueba ACTIVAMENTE la conexión a PostgreSQL (SELECT 1)."""
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            cursor.fetchone()
        return Response({"status": "ok", "database": "up"}, status=status.HTTP_200_OK)
    except Exception as exc: # BD caída, credenciales erróneas, etc.
        return Response(
            {"status": "error", "database": "down", "detail": str(exc)},
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
        )