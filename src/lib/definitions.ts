export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
};

export type Cart = {
  id: string;
  owner_id: string;
  products_ids: Array<string>;
};

export type Order = {
  id: string;
  owner_id: string;
  products_ids: Array<string>;
  total_amount: number;
  date: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
