// Owner: Mubeena (Supporting: Poorvika)
// Handles cart state, add/remove items, quantity, totals
import React from "react";
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const value = { cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
