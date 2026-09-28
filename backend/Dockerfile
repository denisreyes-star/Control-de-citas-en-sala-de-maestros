FROM python:3.11-slim
# Evita .pyc y fuerza logs sin buffer (visibles en `docker compose logs`)
ENV PYTHONDONTWRITEBYTECODE=1 \
PYTHONUNBUFFERED=1
# netcat-openbsd: necesario para el sondeo de socket del entrypoint
RUN apt-get update \
&& apt-get install -y --no-install-recommends netcat-openbsd \
&& rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
# El entrypoint se copia FUERA de /app: el bind mount ./backend:/app no lo
# oculta y siempre usamos la versión saneada de este build.
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
# Defensa en profundidad: elimina CR (\r) por si algún CRLF llegó al repo.
RUN sed -i 's/\r$//' /usr/local/bin/entrypoint.sh \
&& chmod +x /usr/local/bin/entrypoint.sh
COPY . .
EXPOSE 8000
ENTRYPOINT ["entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]