import postgres from "postgres";
import { fetchProducts } from "@/lib/data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const result = await sql.begin((sql) => [fetchProducts()]);

    return Response.json({ message: result });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
