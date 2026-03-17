import bcrypt from "bcrypt";
import postgres from "postgres";
import { products, users } from "@/lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function test() {
  const users = await sql`
  SELECT * FROM products;`;

  return users;
}

async function seedUsers() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      stock INT NOT NULL,
      category VARCHAR(255) NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(
      (product) => sql`
        INSERT INTO products (id, name, description, price, stock, category)
        VALUES (${product.id}::uuid, ${product.name}, ${product.description}, ${product.price}, ${product.stock}, ${product.category})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedProducts;
}

async function createCartsTable() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS carts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      owner_id UUID NOT NULL,
      products_ids UUID[]
    );
  `;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [createCartsTable()]);

    return Response.json({ message: result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
