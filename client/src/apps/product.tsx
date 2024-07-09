import { useNavigate, useSearchParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { Card, Text, Badge, Button, Group } from "@mantine/core";

import { getOneProductByID } from "../graphql/mutations/products/index";

export default function Product() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, loading, error } = useQuery(getOneProductByID, {
    variables: {
      id: searchParams.get("id"),
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Error: {error.message}</div>
      </div>
    );
  }

  if (data) {
    const { readOneProduct } = data;

    return (
      <>
        <Text
          className="mx-20 mb-4 w-[180px] text-xl hover:text-blue-500 underline duration-300"
          onClick={() => navigate("/home")}
        >
          {" "}
          ← Back to home{" "}
        </Text>
        <div className="flex justify-center items-center p-4">
          <Card shadow="sm" padding="lg" className="w-full max-w-md">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: "1rem" }}
            >
              <Text weight={500}>{readOneProduct.name}</Text>
              <Badge color="pink" variant="light">
                ${readOneProduct.price}
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              {readOneProduct.description}
            </Text>

            <div className="flex flex-row items-center mt-4">
              <Badge color="blue" variant="light">
                {readOneProduct.category}
              </Badge>
              <Badge
                color={readOneProduct.status === 'INTACT' ? 'green' : 'red'}
                variant="light"
                className="mx-2"
              >
                {readOneProduct.status}
              </Badge>
            </div>

            <Text size="xs" color="dimmed" className="my-4">
              Added by: {readOneProduct.user.name} ({readOneProduct.user.email})
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
              disabled={readOneProduct.status === "INTACT" ? false : true}
            >
              Buy Now
            </Button>
            <Button
              variant="light"
              color="red"
              fullWidth
              style={{ marginTop: 14 }}
              disabled={readOneProduct.status === "INTACT" ? false : true}
            >
              Rent Now
            </Button>
          </Card>
        </div>
      </>
    );
  }

  return null;
}
