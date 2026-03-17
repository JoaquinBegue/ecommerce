"use client";

import { createCart, cartState } from "@/lib/actions";
import { useActionState } from "react";

export default function Page() {
    const initialState: cartState = { message: null, errors: {} };
    const [state, formAction] = useActionState(createCart, initialState);

    return (
        <form action={formAction}>
            <input name="owner-id" type="text" placeholder="owner-id"></input>
            <input name="products-ids" type="text" placeholder="products-ids"></input>
            <button type="submit">Submit</button>
            <p>Owner Id: {state.errors?.owner_id}</p>
            <p>Products Ids: {state.errors?.products_ids}</p>

        </form>
    );
}