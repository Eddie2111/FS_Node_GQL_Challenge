import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Container,
  Title,
  Group,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { toast } from "sonner";
import { useForm } from "@mantine/form";
import { useMutation } from "@apollo/client";
import { createOneProduct } from "../graphql/mutations/products/index.tsx";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

enum Categories {
  ELECTRONICS = "ELECTRONICS",
  FURNITURE = "FURNITURE",
  HOME_APPLIANCES = "HOME_APPLIANCES",
  SPORTING_GOODS = "SPORTING_GOODS",
  OUTDOOR = "OUTDOOR",
  TOYS = "TOYS",
}

const AddProduct: React.FC = () => {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [createProduct, { loading, error }] = useMutation(createOneProduct);
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      user_id: 1,
    },

    validate: {
      name: (value) => (value.length > 0 ? null : "Name is required"),
      description: (value) =>
        value.length > 0 ? null : "Description is required",
      price: (value) => (value > 0 ? null : "Price must be greater than 0"),
      category: (value) => (value.length > 0 ? null : "Category is required"),
    },
  });

  const handleSubmit = async () => {
    try {
      const userId = userData?.id ?? "0";
      await createProduct({
        variables: { ...form.values, user_id: parseInt(userId ?? 0, 10) },
      });
      form.reset();
      toast.success("Product has been created, check home update!");
      navigate("/home");
    } catch (err) {
      console.error("Error creating product", err);
    }
  };

  const nextStep = () =>
    setCurrentStep((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setCurrentStep((current) => (current > 0 ? current - 1 : current));

  return (
    <Container size="sm" px="xs">
      <Title order={2} align="center" mt="md" mb="lg">
        Add New Product
      </Title>
      {currentStep < 3 ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            nextStep();
          }}
        >
          {currentStep === 0 && (
            <>
              <TextInput
                label="Name"
                placeholder="Product Name"
                {...form.getInputProps("name")}
                mb="sm"
              />
              <TextInput
                label="Description"
                placeholder="Product Description"
                {...form.getInputProps("description")}
                mb="sm"
              />
            </>
          )}
          {currentStep === 1 && (
            <NumberInput
              label="Price"
              placeholder="Product Price"
              {...form.getInputProps("price")}
              mb="sm"
            />
          )}
          {currentStep === 2 && (
            <Select
              label="Category"
              placeholder="Select a category"
              data={Object.keys(Categories).map((key) => ({
                value: key,
                label: key,
              }))}
              {...form.getInputProps("category")}
              mb="sm"
            />
          )}
          <Group position="apart" mt="md">
            <Button onClick={prevStep} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button type="submit">Next</Button>
          </Group>
        </form>
      ) : (
        <>
          <Title order={4}>Summary</Title>
          <Text>
            <strong>Name:</strong> {form.values.name}
          </Text>
          <Text>
            <strong>Description:</strong> {form.values.description}
          </Text>
          <Text>
            <strong>Price:</strong> {form.values.price}
          </Text>
          <Text>
            <strong>Category:</strong> {form.values.category}
          </Text>
          <Group position="apart" mt="md">
            <Button onClick={prevStep}>Previous</Button>
            <Button onClick={handleSubmit} loading={loading}>
              Submit
            </Button>
          </Group>
        </>
      )}
      {error && <div style={{ color: "red" }}>{error.message}</div>}
    </Container>
  );
};

export default AddProduct;
