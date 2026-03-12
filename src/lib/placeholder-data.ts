import { User, Product, Cart, Order } from "./definitions";

// Users
export const users: User[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "hashed_password_123",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "hashed_password_456",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "hashed_password_789",
  },
];

// Products
export const products: Product[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440011",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    stock: 50,
    category: "Electronics",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440012",
    name: "Running Shoes",
    description: "Comfortable running shoes for all terrains",
    price: 89.99,
    stock: 30,
    category: "Footwear",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440013",
    name: "Coffee Maker",
    description: "Automatic coffee maker with timer function",
    price: 149.99,
    stock: 15,
    category: "Appliances",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440014",
    name: "Yoga Mat",
    description: "Non-slip exercise yoga mat",
    price: 29.99,
    stock: 100,
    category: "Fitness",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440015",
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor",
    price: 249.99,
    stock: 25,
    category: "Electronics",
  },
];

// Carts
export const carts: Cart[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440021",
    owner: users[0],
    products: [products[0], products[3]],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440022",
    owner: users[1],
    products: [products[1], products[2], products[4]],
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440023",
    owner: users[2],
    products: [products[3]],
  },
];

// Orders
export const orders: Order[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440031",
    owner: users[0],
    products: [products[1], products[2]],
    total_amount: 239.98,
    date: new Date("2024-01-15T10:30:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440032",
    owner: users[1],
    products: [products[0]],
    total_amount: 199.99,
    date: new Date("2024-01-20T14:15:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440033",
    owner: users[2],
    products: [products[3], products[4]],
    total_amount: 279.98,
    date: new Date("2024-02-01T09:45:00Z"),
  },
];

// Export all data as a single object for convenience
export const placeholderData = {
  users,
  products,
  carts,
  orders,
};
