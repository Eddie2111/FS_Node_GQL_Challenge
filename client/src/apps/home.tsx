import {
  Badge,
  Container,
  Loader,
  Alert,
  Card,
  Text,
  Button,
  Group,
} from "@mantine/core";
import React from "react";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { getProductsByPage } from "../graphql/mutations/products/index";
import ShowBoughtProducts from '../components/home/ShowBoughtProducts';
import ShowIntactProducts from '../components/home/ShowIntactProducts';
import ShowRentedProducts from '../components/home/ShowRentedProducts';

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const sorted = searchParams.get("sorted") || "all";

  const [page, setPage] = React.useState(1);
  const { loading, error, data, refetch } = useQuery(getProductsByPage, {
    variables: { page: page },
  });

  useEffect(() => {
    refetch({ page });
  }, [page, refetch]);

  const handleButtonClick = (sortType) => {
    setSearchParams({ sorted: sortType });
  };

  if (loading) return <Loader variant="dots" size="xl" />;
  if (error) return <Alert color="red">Error: {error.message}</Alert>;

  return (
    <Container size="xl" padding="md">
      <Group position="center" mb="xl">
        <Button onClick={() => handleButtonClick("bought")}>Bought</Button>
        <Button onClick={() => handleButtonClick("rented")}>Rented</Button>
        <Button onClick={() => handleButtonClick("intact")}>Intact</Button>
        <Button onClick={() => handleButtonClick("all")}>All</Button>
      </Group>
      {sorted === "bought" && <ShowBoughtProducts />}
      {sorted === "rented" && <ShowRentedProducts />}
      {sorted === "intact" && <ShowIntactProducts />}
      {sorted === "all" && (
        <div className="p-4">
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.readAllProducts.map((product: ProductProps) => (
              <Card
                key={product.id}
                shadow="sm"
                padding="lg"
                className="mx-auto w-[24rem]"
              >
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: "1rem" }}
                >
                  <Text weight={500}>{product.name}</Text>
                  <Badge color="pink" variant="light">
                    ${product.price}
                  </Badge>
                </Group>
                
                <Badge color="blue" variant="light" className="text-md">
                  {product.category}
                </Badge>

                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  {product.description}
                </Text>

                <Group position="apart" style={{ marginTop: 14 }}>
                  <Button
                    variant="light"
                    color="blue"
                    onClick={() => navigate(`/product/?id=${product.id}`)}
                  >
                    View
                  </Button>
                </Group>
              </Card>
            ))}
          </div>
        </div>
      )}
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
