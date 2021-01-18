import { ADD_TO_CART, DELETE_CART } from "./actionType";

const initialState = {
  cart: [
    {
      id: "2",
      img:
        "https://cdn.shopify.com/s/files/1/0974/7668/products/Almond_Milk_Classic_Shopify_large.jpg",
      qty: 2,
      price: 6.99,
      name: "Almond Milk Classic",
    },
    {
      id: "3",
      img:
        "https://cdn.shopify.com/s/files/1/0974/7668/products/Almond_Milk_Cashew_Shopify_large.jpg",
      qty: 1,
      price: 6.99,
      name: "Almond Milk Crunchy Cashew",
    },
    {
      id: "1",
      img:
        "https://cdn.shopify.com/s/files/1/0974/7668/products/Product_Gingerbread_large.png",
      qty: 1,
      price: 3.75,
      name: "Gingerbread Cookie",
    },
    {
      id: "9",
      img:
        "https://cdn.shopify.com/s/files/1/0974/7668/products/Taza_Toffee_webstore_large.jpg?v=1518615587",
      qty: 1,
      price: 5,
      name: "Toffee, Almond, & Sea Salt",
    },
  ],
  totalAmt: 0,
  totalItems: 0,
};
const getTotal = (cart) => {
  const total = cart.reduce((a, c) => a + Number(c.qty) * Number(c.price), 0);

  const totaItems = cart.reduce((a, c) => a + Number(c.qty), 0);

  return { total, totaItems };
};

export const cartorderReducer = (
  state = initialState,
  { type, payload, qty = 1 }
) => {
  switch (type) {
    case ADD_TO_CART:
      let searchCart = state.cart.findIndex((items) => items.id === payload.id);

      if (searchCart === -1) {
        let cart = [...state.cart, payload];
        let total = getTotal(cart);
        return {
          ...state,
          cart: cart,
          totalAmt: total.total,
          totalItems: total.totaItems,
        };
      } else {
        let newCart = state.cart?.map((item, i) =>
          i === searchCart
            ? { ...item, qty: Number(item.qty) + Number(qty) }
            : item
        );
        let total = getTotal(newCart);
        return {
          ...state,
          cart: [...newCart],
          totalAmt: total.total,
          totalItems: total.totaItems,
        };
      }
    case DELETE_CART:
      let index = state.cart.findIndex((items) => items.id === payload);
      state.cart.splice(index, 1);
      let total = getTotal(state.cart);
      return {
        ...state,
        cart: [...state.cart],
        totalAmt: total.total,
        totalItems: total.totaItems,
      };
    default:
      return state;
  }
};
