from django.db import connection
from django.http import JsonResponse


def health_check(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            cursor.fetchone()
    except Exception as error:
        return JsonResponse(
            {
                "status": "error",
                "database": "down",
                "detail": str(error),
            },
            status=503,
        )

    return JsonResponse(
        {
            "status": "healthy",
            "database": {
                "name": connection.settings_dict["NAME"],
                "status": "up",
            },
        }
    )
