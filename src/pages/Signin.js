import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


 const Login = () =>  {
  
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    username: "",
    password: "",
  })
  
  const [data, setData] = useState([]);

  console.log(inpval);
  window.localStorage.setItem('Account Sign in', JSON.stringify(inpval));

  const getData = (e) => {
  const {value, name} = e.target;
  
  setInpval(()=> {
    return {
          ...inpval,
          [name]:value
      }
    })
  }
  
  function APIPostLogin(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inpval)
  };
  fetch('https://web-laptopp.herokuapp.com/customer/login', requestOptions)
      .then((response) => {
            if (response.status === 200) {
              alert("Đăng nhập thành công");
              history("/trangchu");
            }else if(response.status === 400){
              alert("Tài khoản của bạn không tồn tại");
            }else{
              alert("Have problem....");
            }
      })
  }


  const addData = (e) => {
     e.preventDefault();
     APIPostLogin()
    }
  
  
    return (
      <div>
     
        <center>
          <div className="loginbox">
            <img src="assets/img/avatar.png" className="avatar"alt="" />
            <h1>Đăng nhập</h1>
            <form>
              <input
                type="username"
                name="username"
                onChange={getData}
                placeholder="Tên đăng nhập"
              />
              <input
                type="password"
                name="password"
                onChange={getData}
                placeholder="Mật khẩu"
              />
              <input type="submit" name="Login" onClick={addData} defaultValue="Login" />
              <br />
              <Link to="/dangky">Bạn chưa có tài khoản? Đăng ký ngay!</Link>
            </form>
          </div>
        </center>
      </div>
    );
  }
 

export default Login