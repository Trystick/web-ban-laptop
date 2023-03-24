import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = ({cart, setCart, handleChange}) => {
  
  // const customerid = window.localStorage.getItem('Account Sign in');

  // console.log(customerid);
  
  const [total, setPrice] = useState(0);
  
 

  const handlePrice = () => {
    let ans = 0;
    cart.map(item =>
        ans += item.soluong * item.giaTien
      )
      setPrice(ans);
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item)=> item.id !== id);
    setCart(arr);
  }

  useEffect(()=> {
      handlePrice();
  })

  const history = useNavigate();
  
  const data = total;

  const addData = (e) => {
    e.preventDefault();
    console.log('Da nhan vao nut dat hang');
    history('/payment', {state:{total : data }})
   }

  return (
    <div>
      <div className="wrap cf">
        <div className="heading cf">
          <h1>Giỏ hàng của bạn</h1>
          <Link to="/sanpham" className="continue" alt="">
            Tiếp tục mua sắm
          </Link>
        </div>
        {
            cart.map(item => (
              <table key={item.id}>
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>          
                    <tbody>
                      <tr class="odd">
                          <td className="product-detail">
                              <img
                                src={item.hinhanh[0].hinhanh}
                                alt=""
                                class="itemImg"
                              />
                            <h3>{item.tenSanPham}</h3>
                          </td>
                          <td>
                            <button onClick={()=>handleChange(item, +1)}>+</button>
                            <button>{item.soluong}</button>
                            <button onClick={()=>handleChange(item, -1)}>-</button>
                          </td>
                          <td>{item.giaTien} VND</td>
        
                          <td>
                            <button class="remove" onClick={() => handleRemove(item.id)}>
                              X
                            </button>
                          </td>
                      </tr>
                </tbody>
              </table>
         ))  }

        <div className="subtotal cf">
          <ul>
            <li className="totalRow final">
              <span className="label">Tổng cộng</span>
              <span className="value" name='total' >{total}</span> VND
            </li>
            <li className="totalRow" style={{ padding: "0", marginBottom: "50px"}}>
              <a href="" className="btn-icon continue" onClick={addData} >
                 Đặt hàng
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cart;
