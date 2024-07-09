import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Badge, Card, Text, Button, Group, Pagination } from "@mantine/core";
import { useQuery } from "@apollo/client";

import { getBoughtProducts } from "../../graphql/mutations/products/index";
import { changeStatus } from "../../graphql/mutations/products/index";
import { ProductProps } from "../../types/product.d";

const ShowBoughtProducts = () => {
  const navigate = useNavigate();
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
                <Card
                  key={product.id}
                  shadow="sm"
                  padding="lg"
                  className="mx-auto w-[24rem]"
                >
                  <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: "1rem" }}
                  >
                    <Text weight={500}>{product.name}</Text>
                    <Badge color="pink" variant="light">
                      ${product.price}
                    </Badge>
                  </Group>

                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    {product.description}
                  </Text>

                  <Group position="apart" style={{ marginTop: 14 }}>
                    <Text size="xs" color="dimmed">
                      Added by: {product.user.name} ({product.user.email})
                    </Text>
                    <Button
                      variant="light"
                      color="blue"
                      onClick={() => navigate(`/product/?id=${product.id}`)}
                    >
                      View
                    </Button>
                  </Group>
                </Card>
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
