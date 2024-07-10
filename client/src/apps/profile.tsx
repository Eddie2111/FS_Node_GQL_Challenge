import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Container, Button, Group, Card, Text, Badge } from "@mantine/core";
import {
  getOneUser,
} from "../graphql/queries/users/index";
import {
  getRentedProductsByUser,
} from "../graphql/queries/products/index";
import ProductCardProfile from "../components/ProductCard_Profile";
import { useAuth } from "../contexts/AuthContext";
import { ProductProps } from "../types/product.d";

const Profile = () => {
  const { userData } = useAuth();
  const userID = userData?.id;
  const { data, loading, error } = useQuery(getOneUser, {
    variables: { id: parseInt(userID ?? 0) },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 6;

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error.message}</p>
      </div>
    );

  if (data) {
    const { getUserById } = data;
    const totalProducts = getUserById.Products.length;
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

    const paginatedProducts = getUserById.Products.slice(
      (currentPage - 1) * PRODUCTS_PER_PAGE,
      currentPage * PRODUCTS_PER_PAGE
    );

    return (
      <Container size="xl" className="p-4">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl">User Profile</h1>
          <p className="text-gray-600">Name: {getUserById.name}</p>
          <p className="text-gray-600">Email: {getUserById.email}</p>
        </div>
        <h2 className="mb-4 font-semibold text-xl">Products added by you</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProducts.map((product: ProductProps, index: number) => (
            <ProductCardProfile key={index} product={product} />
          ))}
        </div>
        <Group position="center" mt="md">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Group>
        <RentSection />
      </Container>
    );
  }

  return null;
};

export default Profile;

const RentSection = () => {
  const { userData } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 6;

  const { data, loading, error } = useQuery(getRentedProductsByUser, {
    variables: { id: userData.id ?? "0" },
  });

  if (loading) {
    return <div className="text-center">Checking if rented or not</div>;
  }
  if (error) {
    return (
      <div className="text-center">Unable to retrieve rent information</div>
    );
  }
  if (data) {
    const { GetRentedProductsByUser } = data;
    const totalProducts = GetRentedProductsByUser.length;
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

    const paginatedProducts = GetRentedProductsByUser.slice(
      (currentPage - 1) * PRODUCTS_PER_PAGE,
      currentPage * PRODUCTS_PER_PAGE
    );

    return (
      <Container size="xl" className="p-4">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl">Rented Products</h1>
        </div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProducts.map((product) => {
            const fromDate = new Date(parseInt(product.from));
            const toDate = new Date(parseInt(product.to));
            return (
              <Card
                shadow="sm"
                padding="lg"
                className="border-gray-300 mx-auto border rounded-lg w-full max-w-md"
                key={product.id}
              >
                <Group position="apart" className="mb-2">
                  <Text className="font-medium text-lg">Rent Information</Text>
                  <Badge color="blue" variant="light">
                    {product.product_id}
                  </Badge>
                </Group>
                <Text size="sm" className="mb-4 text-gray-600">
                  Transaction ID: {product.id}
                </Text>
                <Text size="sm" className="mb-2 text-gray-600">
                  Created By: {product.createdby}
                </Text>
                <Text size="sm" className="mb-2 text-gray-600">
                  Rented By: {product.rentedby}
                </Text>
                <Text size="sm" className="mb-2 text-gray-600">
                  From: {fromDate.toISOString().split("T")[0]}
                </Text>
                <Text size="sm" className="mb-2 text-gray-600">
                  To: {toDate.toISOString().split("T")[0]}
                </Text>
              </Card>
            );
          })}
        </div>
        <Group position="center" mt="md">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Group>
      </Container>
    );
  }
  return null;
};
