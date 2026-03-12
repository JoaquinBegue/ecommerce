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
  owner: User;
  products: Array<Product>;
};

export type Order = {
  id: string;
  owner: User;
  products: Array<Product>;
  total_amount: number;
  date: Date;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
