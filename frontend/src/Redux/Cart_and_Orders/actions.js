import { ADD_TO_CART } from "./actionType";

export const addToCart=(payload,qty)=>({
    type:ADD_TO_CART,
    payload,
    qty
})
