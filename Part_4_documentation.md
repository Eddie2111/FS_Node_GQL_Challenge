# Task and Challenges

## Introduction

For this challenge, I developed a simple product renting and buying/selling application called Teebay. This solution includes a Front End (FE), Back End (BE), and a Database (DB).

## Part 1: Preliminary Features

### Login and User Registration

**Assumptions:**

* The Login feature uses simple string matching for the challenge purposes.
* I implemented resolvers and mutations for user registration and login named "signIn" and "signup".
* Users will be using name, email and password for signing up and email and password for logging in.
* Protected the private routes using React's useContext hook to block unnecessary access to the application.

### Implementation

* **Front End:**
  * Developed the Login and User Registration forms using React and Mantine UI components.
  * Implemented basic state management with React hooks.
  * Used React Router for navigation between the Login and Registration pages.
  * Used useContext hook for private route proctection.
* **Back End:**
  * Set up a Node.js server using Express.js.
  * Created Apollo GraphQL resolvers for user registration and login.
  * Stored user data in a PostgreSQL database using Prisma ORM.
  * Implemented basic authentication logic to verify user credentials during login.

## Part 2: Product Management

### Add, Edit, and Delete Products

**Requirements:**

* Add a product with a multi-page form allowing users to go back and edit.
* Enlist categories for products.
* Edit an existing product created by the user.
* Enlist created and lent products
* Delete a product.

Note: Failed to keeping up without using tailwindcss, implemented tailwindcss.

### Implementation:

* **Front End:**
  * Created a multi-page form using React Router and React hooks.
  * Developed components for adding, editing, and deleting products.
  * Ensured the form design matched the provided wireframe from the assessment instruction.
  * Used Apollo Client to handle GraphQL queries and mutations.
  * Implemented form validation and user feedback using Mantine Forms.
  * Implemented pagination in every component heavy pages.
* **Back End:**
  * Developed GraphQL schemas and resolvers for product management.
  * Created endpoints for adding, editing, and deleting products.
  * Created endpoints for listing products by feature and pagination.
  * Ensured product data is correctly stored in the PostgreSQL database using Prisma.

### Data Modelling

* enum categories
  * ELECTRONICS
  * FURNITURE
  * HOME APPLIANCES
  * SPORTING GOODS
  * OUTDOOR
  * TOYS

* User
  * id
  * name
  * email
  * password
  * products[]

* Product
  * id
  * name
  * description
  * price
  * category
  * status
  * transactions
  * user_id [many to one relation towards User table's user.id]
  * created_at
  * updated_at


* Bought
  * id
  * product_id [many to one relation towards Product table's product.id]
  * user_id [many to one relation towards User table's user.id]
  * created_at
  * updated_at


* Rented
  * id
  * product_id
  * createdby
  * rentedby
  * from
  * to
  
* The database schema is available at `server/prisma/schema.prisma`

## Part 3: Rent and Buy/Sell

### Listing and Transactions

**Features:**

* List all products created by all users.
* Allow users to buy or rent products.
* Display all products bought, sold, borrowed status in the home page.
* Display all products added and borrowed by the user.

### Implementation

* **Front End:**
  * Developed components to display a list of all products.
  * Implemented buy and rent functionalities using Apollo Client to manage GraphQL mutations.
  * Used TailwindCSS with Mantine UI for consistent styling and responsive design.
* **Back End:**
  * Created GraphQL resolvers for listing products and handling transactions.
  * Implemented business logic for buying and renting products.
  * Ensured transaction data is accurately tracked and stored in the PostgreSQL database.
