
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserPortal from "./components/Users/UserPortal";
import Home from "./components/Home";  
import Products from "./components/Products";
import Cart from "./components/Cart";
import AllProducts from "./components/AllProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/userportal" element={<UserPortal />}>
          <Route path="/userportal/home" element={<Home />} />
          <Route path="/userportal/category/:categoryName" element={<Products />} />
          <Route path="/userportal/allproduct" element={<AllProducts/>}/>
          <Route path="/userportal/cart" element={<Cart />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
