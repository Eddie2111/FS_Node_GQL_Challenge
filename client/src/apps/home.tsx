import {
  Container,
  Loader,
  Alert,
  Card,
  Text,
  Title,
  Button,
  Group,
} from "@mantine/core";
import React from "react";
import { Link as NavLink } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { getProductsByPage } from "../graphql/mutations/products/index";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { loading, error, data } = useQuery(getProductsByPage, {
    variables: { page: page },
  });

  if (loading) return <Loader variant="dots" size="xl" />;
  if (error) return <Alert color="red">Error: {error.message}</Alert>;

  return (
    <Container size="xl" padding="md">
      <div>
        {data.readAllProducts.map((product: ProductProps) => (
            <div style= {{width:"18rem"}} key={product.id}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            margin="md"
            withBorder
          >
            <Title order={2}>{product.name}</Title>
            <Text size="sm" color="dimmed" mt="md">
              {product.description}
            </Text>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <Text size="lg" weight={500} mt="md">
              ${product.price}
            </Text>
            <NavLink style={{fontSize: "1.5rem", textDecoration: "none", color:"black", marginTop:"6px"}} to={`/product/?id=${ product.id ?? ""}`}> {`→`} </NavLink>
            </div>
          </Card>
          </div>
        ))}
      </div>
      <Group position="center" mt="xl">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous Page
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next Page</Button>
      </Group>
    </Container>
  );
};

export default Home;
