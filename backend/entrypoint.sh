#!/bin/sh

set -e

DB_HOST="${POSTGRES_HOST:-db}"
DB_PORT="${POSTGRES_PORT:-5432}"

echo "Esperando a PostgreSQL en ${DB_HOST}:${DB_PORT}..."
while ! nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 1
done

echo "PostgreSQL disponible."
echo "Aplicando migraciones..."
python manage.py migrate --noinput

echo "Iniciando: $*"
exec "$@"
