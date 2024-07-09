# Project Documentation

## Project Overview

This project is a GraphQL backend application built with Express and Apollo, using PostgreSQL as the database and Prisma as the ORM. The project is managed using pnpm as the package manager.

## Dependencies

## Production Dependencies

    @prisma/client: Prisma client for interacting with the PostgreSQL database.
    @types/bcrypt: TypeScript types for bcrypt, a library for hashing passwords.
    @types/cors: TypeScript types for cors, a middleware for enabling Cross-Origin Resource Sharing.
    @types/jsonwebtoken: TypeScript types for jsonwebtoken, a library for creating and verifying JWTs.
    @types/uuid: TypeScript types for uuid, a library for generating UUIDs.
    apollo-server-express: Apollo Server integration for Express.js, used for setting up the GraphQL server.
    bcrypt: A library to help you hash passwords.
    cors: A middleware for enabling Cross-Origin Resource Sharing.
    dotenv: A module to load environment variables from a .env file into process.env.
    express: A web framework for Node.js.
    gql: A GraphQL query language parser and printer.
    graphql: A reference implementation of GraphQL for JavaScript.
    jsonwebtoken: A library to create and verify JSON Web Tokens.
    nodemon: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
    prettier: An opinionated code formatter.
    prisma: Prisma is a next-generation ORM that can be used to build GraphQL, REST, gRPC APIs and more.
    tslib: A runtime library for TypeScript that contains all of the TypeScript helper functions.
    uuid: A library for generating unique identifiers.
    zod: A TypeScript-first schema declaration and validation library.

## Development Dependencies

    @types/express: TypeScript types for Express.js.

## Installation

To install the project dependencies, you need to have pnpm installed. If pnpm is not installed, you can install it using npm:

```bash
npm install -g pnpm
```

Once pnpm is installed, run the following command to install the project dependencies:

```bash
pnpm install
```

## Running in Development Mode

To run the project in development mode, use the following command:

```bash
pnpm run dev
```

This will start the server using nodemon, which will automatically restart the server whenever file changes are detected.

## Starting the Project

To start the project in production mode, use the following command:

```bash
pnpm start
```

This will start the server using node and run the compiled JavaScript files from the dist directory.

## Environment Variables

The project uses dotenv to manage environment variables. Ensure you have a .env file in the root of your project with the necessary environment variables.

## Project Structure

Here is a brief overview of the project structure:

    src/: The directory where the typescript files are stored.
    dist/: The directory where the compiled JavaScript files are stored.
    prisma/: The ORM schema and migrations are stored.

Make sure to have your Prisma configuration and PostgreSQL database set up correctly for the application to function properly.
