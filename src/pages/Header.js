import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header= ({size, setShow}) =>  {

  const history = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname === "/") return null;
  if (pathname === "/dangky") return null;
 

  function handldeStore(){
    window.localStorage.clear();
    history("/");
    window.location.reload(false);
  }
  
    return (
        <div>
            <header>
          <nav className="header">
            <ul>
              <li>
                <Link to="/trangchu">
                  <img
                    src="assets/img/logo2.png"
                    alt="logo"
                    width="40%"
                    align="middle"
                  />
                </Link>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <form className= "search">
                  <input
                    type="timkiem"
                    name="search"
                    placeholder="Search..."
                    align="middle"
                  
                  />
                  <i
                    className="fas fa-search search"
                    style={{ color: "white", fontSize: 23 }}
                    align="middle"
                  />
                </form>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <div className="dropacc">
                  <button className="dropaccbtn">
                    <i
                      className="fas fa-user-circle"
                      style={{ color: "white", fontSize: 25 }}
                      align="middle"
                    />
                  </button>
                  <div align="left" className="dropacc-content">
                    <Link to="/" onClick={handldeStore}>Đăng xuất</Link>
                  </div>
                </div>
              </li>
              <li>
                <p> </p>
              </li>
              <li>
                <Link to="/cart">
                  <div onClick={()=> setShow(true)}>
                  <button id="cart" onClick={()=> setShow(false)}>
                    <i
                      className="fas fa-shopping-cart"
                      style={{ color: "white", fontSize: 25 }}
                      align="middle"
                    />
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{
                      color:'white',
                      width:'1.5rem',
                      height:'1.5rem',
                      position:'absolute',
                      bottom:0,
                      right:0,
                      transform:'translate(25%, 25%)'
                      }}>
                   <span>{size}</span>
                  </div>
                  </button>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/trangchu">Trang chủ</Link>
            </li>
            <li>
              <Link to="/gioithieu">Giới thiệu</Link>
            </li>
            <div className="dropdown">
              <Link to={"/Sanpham"}>
                <button className="dropbtn">Sản phẩm</button>
              </Link>
            </div>
            <li>
              <Link to="/hoidap">Hỏi đáp</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
}

export default Header;