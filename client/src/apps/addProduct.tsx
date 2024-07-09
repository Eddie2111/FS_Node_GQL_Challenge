import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Container,
  Title,
} from "@mantine/core";
import React from "react";
import { toast } from "sonner";

import { useForm } from "@mantine/form";
import { useMutation } from "@apollo/client";

import { create_product } from "../graphql/mutations/products/index.tsx";
import { useAuth } from '../contexts/AuthContext';

enum Categories {
  ELECTRONICS = "ELECTRONICS",
  FURNITURE = "FURNITURE",
  HOME_APPLIANCES = "HOME_APPLIANCES",
  SPORTING_GOODS = "SPORTING_GOODS",
  OUTDOOR = "OUTDOOR",
  TOYS = "TOYS",
}
// type Category = keyof typeof Categories;

const AddProduct: React.FC = () => {
    const { userData } = useAuth();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      user_id: 1, // Assuming you have a user_id from context or props
    },

    validate: {
      name: (value) => (value.length > 0 ? null : "Name is required"),
      description: (value) =>
        value.length > 0 ? null : "Description is required",
      price: (value) => (value > 0 ? null : "Price must be greater than 0"),
      category: (value) => (value.length > 0 ? null : "Category is required"),
    },
  });

  const [createProduct, { loading, error }] = useMutation(create_product);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const userId = userData?.id ?? "0";
      await createProduct({ variables: { ...values, user_id: parseInt(userId ?? 0, 10) } });
      form.reset();
      toast.success('Product has been created, check home update!');
      // Optionally handle post-submission, e.g., notify user or redirect
    } catch (err) {
      console.error("Error creating product", err);
    }
  };

  return (
    <Container size="sm" px="xs">
      <Title order={2} align="center" mt="md" mb="lg">
        Add New Product
      </Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
        <NumberInput
          label="Price"
          placeholder="Product Price"
          {...form.getInputProps("price")}
          mb="sm"
        />
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
        <Button type="submit" fullWidth mt="md" loading={loading}>
          Add Product
        </Button>
        {error && <div style={{ color: "red" }}>{error.message}</div>}
      </form>
    </Container>
  );
};

export default AddProduct;
