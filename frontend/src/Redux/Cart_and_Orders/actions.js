import { ADD_TO_CART, DELETE_CART } from "./actionType";

export const addToCart=(payload,qty)=>({
    type:ADD_TO_CART,
    payload,
    qty
})

export const deletecart=(id)=>({
    type:DELETE_CART,
    payload:id
})