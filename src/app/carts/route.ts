import postgres from "postgres";
import { fetchCarts } from "@/lib/data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
    try {
        const result = await sql.begin((sql) => [fetchCarts()]);

        return Response.json({ message: result });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}