FROM python:3.8.5-alpine

WORKDIR /usr/src/django_backend

# set python environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install requirements
RUN apk update && apk add \
    zlib-dev jpeg-dev gcc musl-dev \
    postgresql-dev gcc python3-dev

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .

RUN chmod +x ./wait_for_postgres.sh