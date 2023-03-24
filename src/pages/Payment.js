import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Payment = () =>  {
  const location = useLocation();
    console.log(location.state);

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    comment: "",
    diachi: "",
    province_id: "",
    phoneNumber: "",
  })
  

  const [province, setProvince] = useState([]);
  
  useEffect(() =>{
    const getProvince = async() => {
      const resProvince =  await axios("https://web-laptopp.herokuapp.com/province");
      setProvince(resProvince.data);
    }
    getProvince();
  },[])
  
  function getData(e){
    const {value, name} = e.target;
  
  console.log(inpval);
  setInpval(()=> {
    return {
          ...inpval,
          [name]:value
      }
    })
  }

  var obj = {};
  obj.totalOrder = location.state.total;
  obj.inpval = inpval;
  console.log(JSON.stringify(obj));

  function APIPostOrder(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
   fetch('https://web-laptopp.herokuapp.com/order', requestOptions)
      .then((response) => {
        if (response.status === 200) {
          alert("Đặt hàng thành công");
          window.location.reload(false);
          history('/')
        }else{
          alert("Have problem....");
        }
    })
  }

  const addData = (e) => {
     e.preventDefault();
     APIPostOrder();
  }

    return (
          <div id="wrapper">
            {/* <div className="container1">
              <div className="order">
                <h2>Your order summary</h2>
                <div className="item">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/balle.png" alt />
                  <div className="info">
                    <h4>Trixie Soccer Ball, Vinyl</h4>
                    <p className="quantity">Quantity: 1</p>
                    <p className="price">1.99€</p>
                  </div> 
                </div> 
               
                <h4 className="ship">Shipping: FREE</h4>
                <hr />
                <h3 className="total">TOTAL: {location.state.total} VND</h3>
              </div> 
            </div>  */}
            <div className="container2">
              <div className="checkout">
                
                <p><i className="fas fa-check-circle" />Checkout</p>
               
                <div className="payment">
                  <div className="content">
                    <div className="infos">
                      <div className="method">
                       
                       
                      </div> {/* .method */}
                      <div className="cardHolderName">
                        <p className="title">Địa chỉ</p><br />
                        <input type="text" onChange={getData} />
                     						
                      </div> 
                      <select name="province_id" className="province"  onChange={getData} required>
                          <option value="provine">Tỉnh / Thành phố</option>
                            {
                            province && province.map(item => (
                                <option key={item.id}>
                                    {item.name}
                                </option>
                              ))
                            }
                    </select>

                      <div className="cardHolderName">
                        <p className="title">Số điện thoại</p>
                        <input type="text"  onChange={getData} />
                      </div> 
                       <div className="cardHolderName">
                        <p className="title">Lời nhắn</p>
                        <textarea rows="4" cols="38">

                        </textarea>
                        <h2>Tổng tiền: {location.state.total} VND</h2>
                      </div> 
                      <button onClick={addData}>Checkout</button>
                    </div> {/* .infos */}
                  </div> {/* .content */}
                </div> {/* .payment */}
              </div> {/* .checkout */}
            </div> {/* .container2 */}
          </div> 
       );
  }
// }

export default Payment;