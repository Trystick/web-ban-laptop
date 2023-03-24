import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gioithieu from "./Gioithieu";
import Hoidap from "./Hoidap";
import Home from "./Home";
import Sanpham from "./Sanpham";
import Signin from "./Signin";
import Signup from "./Signup";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";
import Chitietsanpham from "./Chitietsanpham"
import Payment from "./Payment";


export default function RouterPage() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleChange = (item, d) => {
    console.log(item,d);
    let ind = -1;
    cart.forEach((data, index) => {
        if(data.id === item.id){
          ind = index;
        }
    });
    const tempArr = cart;
    tempArr[ind].soluong += d;
    if(tempArr[ind].soluong === 0){
      tempArr[ind].soluong = 1;
    }
    setCart([...tempArr]);
  }

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
        if(item.id === product.id)
        isPresent = true;
    })
    if(isPresent)
      {
        setWarning(true);
        setTimeout(() =>{
            setWarning(false);
        }, 3000);
        return;
      }
    setCart([...cart, item]);
  };


  return (
    
    <Router>
         <Routes>
         <Route path="/" element={<Signin />} />
         <Route path="dangky" element={<Signup />} />
         </Routes>
        <Header size={cart.length} setShow={setShow}/>
       
        <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route exact path="trangchu" element={<Home />} />
          <Route path="sanpham" element={<Sanpham />} />
          <Route path="hoidap" element={<Hoidap />} />
          <Route path="gioithieu" element={<Gioithieu />} />
          <Route path="payment" element={<Payment/>}/>
          <Route path="/sanpham/:idSanpham" element={<Chitietsanpham handleClick={handleClick}/>}/>
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          {
          show ? 
            <Route path="sanpham/:idSanpham" element={<Chitietsanpham handleClick={handleClick}/>}/>:
            <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          }
           </Routes>
         <React.Fragment>
          {
            warning && <h1 style={{color:'red'}}>Item is already added to your cart</h1>
          }
        </React.Fragment>
       
        </Suspense>
        <Footer />
    </Router>
    
  );
}
