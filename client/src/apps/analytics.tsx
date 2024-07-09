import React from "react";

import { useQuery } from "@apollo/client";
import { Container, Grid, Paper, Text, Loader, Center } from "@mantine/core";

import { getUserCount, getProductsCount } from "../graphql/queries/analytics";

const Analytics = () => {
  const {
    loading: usercount_loading,
    error: usercount_error,
    data: usercount_data,
    refetch: usercount_refetch,
  } = useQuery(getUserCount);

  const {
    loading: productscount_loading,
    error: productscount_error,
    data: productscount_data,
    refetch: productscount_refetch,
  } = useQuery(getProductsCount);

  React.useEffect(() => {
    usercount_refetch();
    productscount_refetch();
  }, [productscount_refetch, usercount_refetch]);
  console.log(productscount_data?.getProductCount);
  return (
    <Container>
      <Text
        align="center"
        size="xl"
        weight={700}
        style={{ margin: "2rem 0", padding: "2px" }}
      >
        Analytics
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Grid>
          <Grid.Col span={6}>
            <Paper
              shadow="sm"
              padding="md"
              radius="md"
              style={{ margin: "2rem 0", padding: "10px 20px 10px 20px" }}
            >
              <Text size="lg" weight={500}>
                User Count
              </Text>
              {usercount_loading ? (
                <Center style={{ height: "4rem" }}>
                  <Loader />
                </Center>
              ) : usercount_error ? (
                <Text color="red">Error: {usercount_error.message}</Text>
              ) : (
                <Text size="xl" weight={700}>
                  {usercount_data?.getUserCount ?? 0}
                </Text>
              )}
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper
              shadow="sm"
              padding="md"
              radius="md"
              style={{ margin: "2rem 0", padding: "10px 20px 10px 20px" }}
            >
              <Text size="lg" weight={500}>
                Product Count
              </Text>
              {productscount_loading ? (
                <Center style={{ height: "4rem" }}>
                  <Loader />
                </Center>
              ) : productscount_error ? (
                <Text color="red">Error: {productscount_error.message}</Text>
              ) : (
                <Text size="xl" weight={700}>
                  {productscount_data?.getProductCount ?? 0}
                </Text>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
};

export default Analytics;
