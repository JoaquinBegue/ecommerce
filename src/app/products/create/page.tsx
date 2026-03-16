"use client";

import { createProduct, State } from "@/lib/actions";
import { useActionState } from "react";

export default function Page() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <form action={formAction}>
      <input name="name" type="text" placeholder="name"></input>
      <input name="description" type="text" placeholder="description"></input>
      <input name="price" type="number" placeholder="price"></input>
      <input name="stock" type="number" placeholder="stock"></input>
      <input name="category" type="text" placeholder="category"></input>
      <button type="submit">Submit</button>
      <p>Name: {state.errors?.name}</p>
      <p>Description: {state.errors?.description}</p>
      <p>Price: {state.errors?.price}</p>
      <p>Stock: {state.errors?.stock}</p>
      <p>Category: {state.errors?.category}</p>
    </form>
  );
}
