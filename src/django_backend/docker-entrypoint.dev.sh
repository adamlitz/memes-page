#!/usr/bin/env sh

# Apply database migrations
echo "Apply database migrations"
python manage.py flush --no-input
python manage.py migrate

# wait for postgres
./wait_for_postgres.sh

# Run
python manage.py runserver 0.0.0.0:8000