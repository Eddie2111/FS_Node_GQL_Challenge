# Teebay

## Overview

Teebay is a simple product renting and buying/selling application. The application allows users to sign up, log in, create products, view products, view their uploaded products, and view user and product counts.

## Feature documentation

### Overview

The frontend of TeeBay is built using ReactJS and Apollo graphql utilizing it's in memory caching. The app becomes active after the first contact with the backend.

The frontend is located at ``/client``

The backend of Teebay is built using Express.js and Apollo Server, with PostgreSQL as the database managed by Prisma ORM. The application provides GraphQL APIs for user authentication and managing products. The backend is located at ``/server``

### Features

* Users can sign up.
* Users can log in.
* Users can create products.
* Users can view all products.
* Users can view the products they have uploaded.
* Users can view user counts and product counts.
* Users are able to rent a product
* Users are able to buy a product
* Users are only able to edit their own added products

### Advancement

* Users can assign time for how long the product can be rented
* Tackling time overlap

### Project Documentations

* For Frontend documentation, please refer to readme for frontend.md
* For Backend documentation, please refer to readme for backend.md
* For Database, docker has been used and proper commands and documentations available at docker_commands.md
* For ChatGPT prompts, please refer to prompt_logs.md

### Starting the project

- Both The projects need to installed first in order to start, please refer to respective documents to start the parts.

* The database has to be started first. We are using docker to initiate the database first.

``docker run -d -p 5400:5432 -p 5401:5433 --name postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=admin postgres:latest``

* To start the backend,

``cd server``

then use this to start the project,

``pnpm start``

* To start the frontend,

``cd client``

then use this to start the project,

``pnpm run dev``
