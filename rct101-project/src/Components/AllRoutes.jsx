import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import GetStarted from "../Pages/GetStarted";
import PriceAndMenu from "../Pages/PriceAndMenu";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/get-started" element={<GetStarted/>}></Route>
      <Route path="/price&menu" element={<PriceAndMenu/>}></Route>
    </Routes>
  );
}
