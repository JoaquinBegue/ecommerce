"use client";

import { createProduct, State } from "@/lib/actions";
import { useActionState } from "react";

export default function Page() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <form action={formAction} className="w-52 mx-auto mt-10">
      <h1 className="mx-auto w-fit">Create Product</h1>
      <input
        className="border-2 rounded-md p-1 m-2"
        name="name"
        type="text"
        placeholder="name"
      ></input>
      <p>{state.errors?.name && `Name ${state.errors?.name}`}</p>
      <input
        className="border-2 rounded-md p-1 m-2"
        name="description"
        type="text"
        placeholder="description"
      ></input>
      <p>
        {state.errors?.description &&
          `Description ${state.errors?.description}`}
      </p>
      <input
        className="border-2 rounded-md p-1 m-2"
        name="price"
        type="number"
        placeholder="price"
      ></input>
      <p>{state.errors?.price && `Price ${state.errors?.price}`}</p>
      <input
        className="border-2 rounded-md p-1 m-2"
        name="stock"
        type="number"
        placeholder="stock"
      ></input>
      <p>{state.errors?.stock && `Stock ${state.errors?.stock}`}</p>
      <input
        className="border-2 rounded-md p-1 m-2"
        name="category"
        type="text"
        placeholder="category"
      ></input>
      <p>{state.errors?.category && `Category ${state.errors?.category}`}</p>
      <button className="mx-auto border-2 rounded-md w-fit" type="submit">
        Submit
      </button>
    </form>
  );
}
