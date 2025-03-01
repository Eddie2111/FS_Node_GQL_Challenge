import {
  Badge,
  Card,
  Text,
  Button,
  Group,
} from "@mantine/core";
import { ProductProps } from "../types/product.d";
import { useNavigate } from "react-router-dom";
const ProductCard = ({product}: {product: ProductProps}) => {
    const navigate = useNavigate();
return (
  <Card key={product.id} shadow="sm" padding="lg" className="mx-auto w-[24rem]">
    <Group position="apart" style={{ marginBottom: 5, marginTop: "1rem" }}>
      <Text weight={500}>{product.name}</Text>
      <Badge color="pink" variant="light">
        ${product.price}
      </Badge>
    </Group>

    <div className="flex flex-row gap-4">
      <Badge color="blue" variant="light" className="text-md">
        {product.category}
      </Badge>
      <Badge color={product.status === 'INTACT' ? 'blue' : 'pink'} variant="light" className="text-md">
        {product.status}
      </Badge>
    </div>

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
    </Group>
  </Card>
);
}

export default ProductCard;
