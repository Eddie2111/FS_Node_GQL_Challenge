import {
  Container,
  Loader,
  Alert,
  Button,
  Group,
} from "@mantine/core";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { getProductsByPage } from "../graphql/queries/products/index";
import ShowBoughtProducts from '../components/home/ShowBoughtProducts';
import ShowIntactProducts from '../components/home/ShowIntactProducts';
import ShowRentedProducts from '../components/home/ShowRentedProducts';
import ProductCard from "../components/ProductCard";
import { ProductProps } from "../types/product.d";

const Home = () => {
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
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      )}
      {
      sorted !== ('all' || "") ? 
        <></>
       : 
        <Group position="center" mt="xl">
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous Page
          </Button>
          <Button onClick={() => setPage(page + 1)}>Next Page</Button>
        </Group>
       }
    </Container>
  );
};


export default Home;
