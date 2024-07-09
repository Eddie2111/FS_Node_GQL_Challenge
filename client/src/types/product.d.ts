interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  status: string;
  category: string;
  user: {
    name: string;
    email: string;
  };
}
export type {
    ProductProps
}