# Graphql Queries & Mutation List

Address: http://localhost:4000/graphql

# Users

## Hello

```json
{
  Hello
}
```

## Sign In

```json
mutationSignIn($email: String!,$password: String!){
  signIn(email: $email,password: $password)
}
```

## Signup

```json
mutation SignUp($name: String! $email: String!,$password: String! ){
  signUp(name: $name, email: $email, password: $password)
  { name, email, id}
}
```

## Remove a user

```json
mutationCreateUser($email: String!){
    removeUser(email: $email)
}
```

# Products

## Create a product

```json
mutation CreateProduct($name: String!, $description: String!, $price: Int!, $category: Categories!, $user_id: Int!) {
    createProduct(name: $name, description: $description, price: $price, category: $category, user_id: $user_id)
    { id name description price category user_id }
}
```

Payload example:

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "category": "ELECTRONICS",
  "userId": 6
}
```

## Update a product

```json
mutation CreateProduct($id: String!, $name: String!, $description: String!, $price: String!) {
    updateProduct(id: $id, name: $name, description: $description, price: $price)
    { id name description price }
}
```

Payload example:

same as createProduct

## Get one product

````json
query GetOneProduct($id: String!){
    readOneProduct(id: $id) {name description id price user_id}
}
```json

Payload example {
  "id": 1
}

````

## Get all products

```json
query GetAllProducts($page: Int!){
    readAllProducts(page: $page) {name description id price user_id}
}
```

Payload example {
"page": 1
}
