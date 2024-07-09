import React from "react";
import { useQuery } from "@apollo/client";
import { Container } from "@mantine/core";
import { getOneUser } from "../graphql/mutations/users/index";
import { useAuth } from "../contexts/AuthContext";
import { ProductProps } from "../types/product.d";
import ProductCard from '../components/ProductCard';
const Profile = () => {
  const { userData } = useAuth();
  const userID = userData?.id;
  const { data, loading, error } = useQuery(getOneUser, {
    variables: { id: parseInt(userID ?? 0) ?? 0 },
  });

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
    return (
      <Container size="xl" className="p-4">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl">User Profile</h1>
          <p className="text-gray-600">Name: {getUserById.name}</p>
          <p className="text-gray-600">Email: {getUserById.email}</p>
        </div>
        <h2 className="mb-4 font-semibold text-xl">Products added by you</h2>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {getUserById.Products.map((product):ProductProps => (
            <ProductCard product={product}/>
          ))}
        </div>
      </Container>
    );
  }

  return null;
};

export default Profile;
