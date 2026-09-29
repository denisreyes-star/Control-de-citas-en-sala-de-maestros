# Sistema de control de citas - Sala de maestros ULSA

## Frameworks Elegidos
* **Backend:** Django y Django REST Framework (DRF)
* **Frontend:** React.js con Vite
* **Base de Datos:** PostgreSQL
* **Infraestructura:** Docker y Docker Compose

## Instrucciones de Arranque
Para ejecutar este proyecto localmente, asegúrate de tener Docker instalado y ejecutándose en tu máquina.

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/denisreyes-star/Control-de-citas-en-sala-de-maestros.git](https://github.com/denisreyes-star/Control-de-citas-en-sala-de-maestros.git)


Entra al directorio del proyecto:
cd Control-de-citas-en-sala-de-maestros
Construye y levanta los contenedores en segundo plano:
docker compose up -d --build
El backend estará disponible en http://localhost:8000 y el frontend en http://localhost:3000.
