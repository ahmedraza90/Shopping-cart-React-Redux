import Home from "./pages";
import Detail from "./pages/detailpage";
import Cart from "./pages/AddToCart";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import ResponsiveAppBar from "./Navbar";
import React from "react";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path=":id" element={<Detail />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </>
  );
}

export default App;
