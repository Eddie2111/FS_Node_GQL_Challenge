import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { useQuery } from "@apollo/client";
import { getIntactProducts } from "../../graphql/queries/products/index";
import { ProductProps } from "../../types/product.d";
import ProductCard from "../ProductCard";

const ShowIntactProducts = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data, refetch } = useQuery(getIntactProducts, {
    variables: { page: page },
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>There was an error fetching the products</p>;
  }

  if (data) {
    const products = data.getIntactProducts;
    return (
      <div className="p-4">
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.length !== 0 ? (
            products.map((product: ProductProps) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="flex justify-center my-12 font-bold text-2xl text-gray-500">
              No Product found Intact
            </div>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <Pagination page={page} onChange={setPage} total={10} />
        </div>
      </div>
    );
  }

  return null;
};

export default ShowIntactProducts;
