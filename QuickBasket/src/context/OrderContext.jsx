// Owner: Twjaswi (Supporting: Ashwariya)
// Handles order placement, history, tracking state

import { createContext, useContext, useState } from 'react';

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const value = { orders, setOrders };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export const useOrder = () => useContext(OrderContext);
