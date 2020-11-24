# My memes page

**My memes page** is a place for your favourite memes. You can upload them and share with your friends. Anybody can give a like to a meme. Go ahead and try features like infinite scroll or the dark mode.

## Getting Started



### Prerequisites

To run the project you'll need: **docker, docker-compose and some free space on your disc**

### Installing



**To run the project in production environment, type following command in the **src/** directory:**
```
docker-compose -f docker-compose.prod.yaml up --build
```

**Page will be available at:**
```
0.0.0.0/
```
**You can also play with the provided GraphQL API at:**
```
0.0.0.0/graphl
```

**If you fancy development environment, use:**
```
docker-compose up --build
```

**Page will be available at:**
```
localhost:3000/
```
**You can also play with the provided GraphQL API at:**
```
localhost:8000/graphl
```

**Page should show up with no memes, try to add some.**

[![moje_meme_page](https://github.com/adamlitz/memes-page/blob/main/src/react_frontend/public/moje_meme_page.png "moje_meme_page")](https://github.com/adamlitz/memes-page/blob/main/src/react_frontend/public/moje_meme_page.png "asd")

[![moje_meme_add_form](https://github.com/adamlitz/memes-page/blob/main/src/react_frontend/public/moje_meme_add_form.png "moje_meme_add_form")](https://github.com/adamlitz/memes-page/blob/main/src/react_frontend/public/moje_meme_add_form.png "moje_meme_add_form")

## Built With

* **Backend** (main technologies used)
    * Django 3.1.2
    * GraphQL (graphene-django)
    * Gunicorn WSGI
* **Frontend**
    * React 17.0.0
    * React Hooks
    * Relay GraphQL Server
    * Relay Hooks (for integrating React Hooks and Relay)
    * Material-UI
* **Other**
    * Docker
    * docker-compose
    * nginx for frontend web server and reverse proxy for docker-compose services
    * PostgreSQL database

## What did I achieve

I created this project mainly for learning purposes. I wanted to learn GraphQL and React Hooks because I already had some background in backend development using Django, Django Rest Framework and NodeJS (Express). I didn't want to limit myself to the backend, but also learn the frontend. Since I was quite familiar with JavaScript already, it was entertaining to build this app and learn React this way.

## Authors

* **Adam Rukowicz**

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details
