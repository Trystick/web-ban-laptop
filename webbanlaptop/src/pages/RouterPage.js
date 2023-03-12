import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gioithieu from "./Gioithieu";
import Hoidap from "./Hoidap";
import Home from "./Home";
import Laptopdohoakythuat from "./Laptopdohoakythuat";
import Laptopgaming from "./Laptopgaming";
import Laptopvanphong from "./Laptopvanphong";
import Linhkien from "./Linhkien";
import Sanpham from "./Sanpham";
import Signin from "./Signin";
import Signup from "./Signup";
import Cart from "./Cart";

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="sanpham" element={<Sanpham />} />
          <Route path="hoidap" element={<Hoidap />} />
          <Route path="gioithieu" element={<Gioithieu />} />
          <Route path="dohoakythuat" element={<Laptopdohoakythuat />} />
          <Route path="gaming" element={<Laptopgaming />} />
          <Route path="vanphong" element={<Laptopvanphong />} />
          <Route path="linhkien" element={<Linhkien />} />
          <Route path="dangnhap" element={<Signin />} />
          <Route path="dangky" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
