import postgres from "postgres";
import { Product } from "@/lib/definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchProducts() {
  try {
    console.log("Fetching products...");
    const data = await sql<Product[]>`SELECT * FROM products`;
    console.log("Products fetch completed.");

    return data;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch products.");
  }
}
