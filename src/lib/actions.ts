"use server";

import z from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { User, Product } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const ProductFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.coerce.number().gt(0),
  stock: z.coerce.number().gte(0),
  category: z.string(),
});

const CartFormSchema = z.object({
  id: z.string(),
  owner_id: z.string(),
  products_ids: z.array(z.string()),
});

const OrderFormSchema = z.object({
  id: z.string(),
  owner_id: z.string(),
  products_ids: z.array(z.string()),
  total_amount: z.number(),
  date: z.date(),
});

const CreateProduct = ProductFormSchema.omit({ id: true });
const CreateCart = CartFormSchema.omit({ id: true });
const CreateOrder = OrderFormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
    price?: string[];
    stock?: string[];
    category?: string[];
  };
  message?: string | null;
};

export async function createProduct(
  prevState: State | undefined,
  formData: FormData,
) {
  const validatedFields = CreateProduct.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    category: formData.get("category"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { name, description, price, stock, category } = validatedFields.data;

  try {
    await sql`
      INSERT INTO products (name, description, price, stock, category)
      VALUES (${name}, ${description}, ${price}, ${stock}, ${category})
      ON CONFLICT (id) DO NOTHING;
    `;
    revalidatePath("/products");
    return {
      message: "Product created successfully.",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
}
