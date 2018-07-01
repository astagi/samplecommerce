# Simplecommerce

A little e-commerce built on Angular, Bootstrap and DRF

## Setup frontend

You need [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3 installed. Then

    yarn install

And start the dev server

    ng serve

## Setup backend

Using a virtualenv, install backend dependencies

    cd backend
    pip install -r requirements.txt

Migrate

    python manage.py migrate

Then start the dev server

    python manage.py runserver
