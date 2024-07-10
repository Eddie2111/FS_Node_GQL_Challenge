import {
  Badge,
  Card,
  Text,
  Button,
  Group,
} from "@mantine/core";
import { ProductProps } from "../types/product.d";
import { useNavigate } from "react-router-dom";
import { getOneRent } from "../graphql/queries/products/index";
import { useQuery } from '@apollo/client';
import DeleteModal from './DeleteModal';

const ProductCard = ({product}: {product: ProductProps}) => {
    const navigate = useNavigate();
    const {data:rented ,loading: loading_rented, error:error_rented} = useQuery(getOneRent,{
      variables: {
         id: product.id
      }
    });
    console.log(rented,loading_rented,error_rented);
return (
  <Card key={product.id} shadow="sm" padding="lg" className="mx-auto w-[24rem]">
    <Group position="apart" style={{ marginBottom: 5, marginTop: "1rem" }}>
      <Text weight={500}>{product.name}</Text>
      <Badge color="pink" variant="light">
        ${product.price}
      </Badge>
    </Group>

    <Badge color="blue" variant="light" className="text-md">
      {product.category}
    </Badge>

    <Text size="sm" style={{ lineHeight: 1.5 }}>
      {product.description}
    </Text>

    <Group position="apart" style={{ marginTop: 14 }}>
      <Button
        variant="light"
        color="blue"
        onClick={() => navigate(`/product/?id=${product.id}`)}
      >
        View
      </Button>
      <Button
        variant="light"
        color="green"
        onClick={() => navigate(`/editproduct/?id=${product.id}`)}
      >
        Edit
      </Button>
      <DeleteModal product_id={product.id} />
    </Group>
  </Card>
);
}

export default ProductCard;
