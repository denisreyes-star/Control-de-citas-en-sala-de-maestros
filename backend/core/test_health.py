from django.test import TestCase, Client

class HealthCheckTest(TestCase):
    def test_health_check_endpoint(self):
        """Prueba automatizada para verificar la respuesta del endpoint de salud."""
        client = Client()
        response = client.get('/api/v1/health/')
        self.assertIn(response.status_code, [200, 503])
        self.assertIn('status', response.json())
