import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { Card, Text, Button, Group, TextInput, Select } from "@mantine/core";

import { updateProductByID } from "../graphql/mutations/products/index";
import { getOneProductByID } from "../graphql/queries/products/index";
import { toast } from "sonner";

enum Categories {
  ELECTRONICS = "ELECTRONICS",
  FURNITURE = "FURNITURE",
  HOME_APPLIANCE = "HOME_APPLIANCE",
  SPORTING_GOODS = "SPORTING_GOODS",
  TOYS = "TOYS",
}

enum ProductStatus {
  INTACT = "INTACT",
  BOUGHT = "BOUGHT",
  RENTED = "RENTED",
}

export default function Product() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, loading, error } = useQuery(getOneProductByID, {
    variables: {
      id: searchParams.get("id"),
    },
  });

  const [UpdateProduct, { loading: updateProgress }] =
    useMutation(updateProductByID);

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    if (!loading && data) {
      const { readOneProduct } = data;
      setFormData({
        name: readOneProduct.name,
        price: readOneProduct.price,
        description: readOneProduct.description,
        category: readOneProduct.category,
        status: readOneProduct.status,
      });
    }
  }, [loading, data]);

  const handleBack = () => {
    navigate("/home");
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await UpdateProduct({
        variables: {
          id: searchParams.get("id"),
          name: formData.name,
          price: parseFloat(formData.price), // Convert price to float if necessary
          description: formData.description,
          category: formData.category.toUpperCase() as Categories, // Ensure type safety by casting
          status: formData.status.toUpperCase() as ProductStatus, // Ensure type safety by casting
        },
      });
      toast.success("Product data updated successfully");
      navigate("/profile");
    } catch (err) {
      console.error("Error updating product:", err);
      toast.error("Failed to update product data");
    }
  };

  const handleInputChange = (e:React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

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
    return (
      <>
        <Text
          className="mx-20 mb-4 w-[180px] text-xl hover:text-blue-500 underline duration-300"
          onClick={handleBack}
        >
          ← Back to home
        </Text>
        <div className="flex justify-center items-center p-4">
          <Card shadow="sm" padding="lg" className="w-full max-w-md">
            <form onSubmit={handleSubmit}>
              <Group className="flex justify-between mt-4 mb-5">
                <TextInput
                  label="Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
                <TextInput
                  label="Price"
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </Group>

              <TextInput
                label="Description"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="mt-4 w-full"
              />

              <Group className="flex justify-between mt-4">
                <Select
                  label="Category"
                  id="category"
                  name="category"
                  data={[
                    { value: "ELECTRONICS", label: "Electronics" },
                    { value: "FURNITURE", label: "Furniture" },
                    { value: "HOME_APPLIANCE", label: "Home Appliances" },
                    { value: "SPORTING_GOODS", label: "Sporting Goods" },
                    { value: "TOYS", label: "Toys" },
                  ]}
                  value={formData.category}
                  onChange={(value) =>
                    setFormData({ ...formData, category: value ?? 'ELECTRONICS' })
                  }
                  required
                  className="w-full"
                />
                <Select
                  label="Status"
                  id="status"
                  name="status"
                  data={[
                    { value: "INTACT", label: "Intact" },
                    { value: "BOUGHT", label: "Bought" },
                    { value: "RENTED", label: "Rented" },
                  ]}
                  value={formData.status}
                  onChange={(value) =>
                    setFormData({ ...formData, status: value ?? "INTACT" })
                  }
                  required
                  className="w-full"
                />
              </Group>

              <Button
                type="submit"
                variant="light"
                color="blue"
                fullWidth
                className="mt-4"
                disabled={updateProgress}
              >
                {updateProgress ? "Updating..." : "Update"}
              </Button>
            </form>
          </Card>
        </div>
      </>
    );
  }

  return null;
}
