import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import GetStarted from "../Pages/GetStarted";
import PriceAndMenu from "../Pages/PriceAndMenu";
import Checkout from "../Pages/Checkout";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/get-started" element={<PrivateRoutes><GetStarted/></PrivateRoutes>}></Route>
      <Route path="/price&menu" element={<PriceAndMenu/>}></Route>
      <Route path="/checkout" element={<PrivateRoutes><Checkout/></PrivateRoutes>}></Route>
    </Routes>
  );
}
