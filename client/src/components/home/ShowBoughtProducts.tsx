import { useEffect, useState } from "react";

import {  Pagination } from "@mantine/core";
import { useQuery } from "@apollo/client";

import { getBoughtProducts } from "../../graphql/mutations/products/index";
import { changeStatus } from "../../graphql/mutations/products/index";
import { ProductProps } from "../../types/product.d";
import ProductCard from '../ProductCard';

const ShowBoughtProducts = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data, refetch } = useQuery(getBoughtProducts, {
    variables: { page: page },
  });
  useEffect(() => {
    refetch();
  });
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>There was an error fetching the products</p>;
  }
  if (data) {
    return (
      <div className="p-4">
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {getBoughtProducts.length > 0 ? (
            getBoughtProducts.map(
              (product): ProductProps => (
                <ProductCard product={product} />
              )
            )
          ) : (
            <div className="flex justify-center my-12 font-bold text-2xl text-gray-500">
              {" "}
              No Product found Bought{" "}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <Pagination page={page} onChange={setPage} total={10} />
        </div>
      </div>
    );
  }
};

export default ShowBoughtProducts;
