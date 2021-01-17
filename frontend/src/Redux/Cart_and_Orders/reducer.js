import { ADD_TO_CART } from "./actionType"

const initialState = {
    cart:[],
    totalAmt:0,
    totalItems:0

}
const getTotal=(cart)=> {
    const total = cart.reduce(
      (a, c) =>
       a + Number(c.qty) * Number(c.price)
      ,0);

      const totaItems=cart.reduce((a,c)=>
       a + Number(c.qty)
     ,0)

    return {total,totaItems};
  }

export const cartorderReducer= (state = initialState, { type, payload,qty=1 }) => {
    switch (type) {
    
    case ADD_TO_CART:
        const searchCart = state.cart.findIndex((items) => items.id === payload.id);
       
        if (searchCart === -1) {
          const cart=[...state.cart, payload]
          const total=getTotal(cart)
          console.log(total,cart)
            return{
                ...state,
                cart: cart,
                totalAmt:total.total,
                totalItems:total.totaItems

            }
        }
        else {
          const newCart = state.cart?.map((item, i) =>
            i === searchCart ? { ...item, qty: Number(item.qty) +Number(qty) } : item
          );
          const total=getTotal(newCart)
          console.log(total,newCart)
          
         return{
             ...state,
             cart: [...newCart],
             totalAmt:total.total,
             totalItems:total.totaItems
         }
          }
          
          default:
              return state
    }
}

