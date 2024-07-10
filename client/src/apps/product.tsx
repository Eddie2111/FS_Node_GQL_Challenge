import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from 'sonner';

import { useQuery, useMutation } from "@apollo/client";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import { getOneProductByID, getOneRent } from "../graphql/queries/products/index";
import { changeStatus } from "../graphql/mutations/products/index";
import RentModal from '../components/RentModal';

export default function Product() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [ChangeStatus, { loading: change_loading }] =
    useMutation(changeStatus);
  const { data: singleProduct, loading, error, refetch } = useQuery(getOneProductByID, {
    variables: {
      id: searchParams.get("id"),
    },
  });
  React.useEffect(()=>{
    refetch()
  })
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

  if (singleProduct) {
    const { readOneProduct } = singleProduct;
    if(readOneProduct){
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
                color={readOneProduct.status === "INTACT" ? "green" : "red"}
                variant="light"
                className="mx-2"
              >
                {readOneProduct.status}
              </Badge>
            </div>

            <Text size="xs" color="dimmed" className="mt-4 mb-2">
              Added by: {readOneProduct.user.name} ({readOneProduct.user.email})
            </Text>
            <Text size="xs" color="dimmed">
              Product ID: {readOneProduct.id}
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
              disabled={
                (readOneProduct.status === "INTACT" ? false : true) &&
                (change_loading ? false : true)
              }
              onClick={async () => {
                await ChangeStatus({
                  variables: { id: readOneProduct.id, status: "BOUGHT" },
                });
                toast.success("Product has been bought by you!");
                navigate("/home");
              }}
            >
              Buy Now
            </Button>
            {readOneProduct.status === ("INTACT" || "RENTED") ? (
              <RentModal
                product_id={readOneProduct?.id ?? ""}
                createdBy={readOneProduct?.user.id ?? ""}
                rent={true}
              />
            ) : (
              <RentModal
                product_id={readOneProduct?.id ?? ""}
                createdBy={readOneProduct?.user.id ?? ""}
                rent={false}
              />
            )}
          </Card>
        </div>
        <RentCard />
      </>
    );
  } if(readOneProduct === null){
    return(
      <p className="h-screen text-4xl text-center"> The product is longer available </p>
    )
  }
  }

  return null;
}

const RentCard = ()=>{
  const [searchParams] = useSearchParams();
  const {
    data: rented,
    loading: loading_rented,
    error: error_rented,
  } = useQuery(getOneRent, {
    variables: {
      id: searchParams.get("id"),
    },
  });

    if (loading_rented) {
        return <div className="text-center">Checking if rented or not</div>;
    }
    if (error_rented) {
      return (
        <div className="text-center">Unable to retrieve rent information</div>
      );
    }
  if(rented.getOneRent){
    const { getOneRent } = rented;
    const fromDate = new Date(parseInt(getOneRent.from) ?? 0);
    const toDate = new Date(parseInt(getOneRent.to) ?? 0);
    return (
      <Card
        shadow="sm"
        padding="lg"
        className="border-gray-300 mx-auto border rounded-lg w-full max-w-md"
      >
        <Group position="apart" className="mb-2">
          <Text className="font-medium text-lg">Rent Information</Text>
          <Badge color="blue" variant="light">
            {getOneRent.product_id}
          </Badge>
        </Group>
        <Text size="sm" className="mb-4 text-gray-600">
          Transaction ID: {getOneRent.id}
        </Text>
        <Text size="sm" className="mb-2 text-gray-600">
          Created By: {getOneRent.createdby}
        </Text>
        <Text size="sm" className="mb-2 text-gray-600">
          Rented By: {getOneRent.rentedby}
        </Text>
        <Text size="sm" className="mb-2 text-gray-600">
          From: {fromDate.toISOString().split("T")[0]}
        </Text>
        <Text size="sm" className="mb-2 text-gray-600">
          To: {toDate.toISOString().split("T")[0]}
        </Text>
      </Card>
    );
  }

}

