SH
#!/bin/sh
# Espera a PostgreSQL, migra y cede el control al comando del contenedor.
set -e
DB_HOST="${POSTGRES_HOST:-db}"
DB_PORT="${POSTGRES_PORT:-5432}"
echo "⏳ Esperando a PostgreSQL en ${DB_HOST}:${DB_PORT}..."
# nc -z: solo comprueba que el puerto acepta conexiones (sin enviar datos)
while ! nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 1
done
echo " PostgreSQL disponible."
echo " Aplicando migraciones..."
python manage.py migrate --noinput
echo " Iniciando: $*"
# exec: el proceso final pasa a ser PID 1 y recibe señales (docker stop)
exec "$@"
