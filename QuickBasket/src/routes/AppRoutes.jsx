// Owner: Prashant (Architecture & Shared UI)
// Object-based routing foundation

import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import OTPVerification from "../pages/OTPVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ProductListing from "../pages/ProductListing";
import ProductDetails from "../pages/ProductDetails";
import SearchResults from "../pages/SearchResults";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import AddressManagement from "../pages/AddressManagement";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import OrderConfirmation from "../pages/OrderConfirmation";
import MyOrders from "../pages/MyOrders";
import OrderDetails from "../pages/OrderDetails";
import OrderTracking from "../pages/OrderTracking";
import Profile from "../pages/Profile";
import AccountSettings from "../pages/AccountSettings";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/otp-verification",
    element: <OTPVerification />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/products",
    element: <ProductListing />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/addresses",
    element: <AddressManagement />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/order-confirmation",
    element: <OrderConfirmation />,
  },
  {
    path: "/orders",
    element: <MyOrders />,
  },
  {
    path: "/orders/:id",
    element: <OrderDetails />,
  },
  {
    path: "/orders/:id/tracking",
    element: <OrderTracking />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;