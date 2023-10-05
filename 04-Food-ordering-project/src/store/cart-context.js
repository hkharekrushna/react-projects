import React from "react";

const CartContext = React.createContext(
  // initial values
  {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  }
);

export default CartContext;
