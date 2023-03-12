import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userPostFetch } from "./action";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten_khach_hang: "",
      email: "",
      diachi: "",
      province_id: "",
      so_dien_thoai: "",
      username: "",
      password: "",
      items: [],
      DataisLoaded: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
  };

  componentDidMount() {
    fetch("https://web-laptopp.herokuapp.com/province")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Chờ một chút nhé .... </h1>{" "}
        </div>
      );
    return (
      <div>
        <header>
          <nav className="header">
            <ul>
              <li>
                <Link to="/">
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
                <form>
                  <input
                    type="timkiem"
                    name="search"
                    placeholder="Search..."
                    align="middle"
                  />
                  <i
                    className="fas fa-search"
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
                    <Link to="/dangnhap">Đăng nhập</Link>
                    <Link to="/dangky">Đăng ký</Link>
                  </div>
                </div>
              </li>
              <li>
                <p> </p>
              </li>
              <li>
                <button className="dropaccbtn">
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "white", fontSize: 25 }}
                    align="middle"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <center>
          <div className="signupbox">
            <img src="assets/img/avatar.png" className="avatar" alt=""/>
            <h1>Đăng ký tài khoản</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="hovaten"
                name="ten_khach_hang"
                onChange={this.handleChange}
                value={this.state.ten_khach_hang}
                placeholder="Họ và tên"
              />
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="Email"
              />
              <input
                type="diachi"
                name="diachi"
                onChange={this.handleChange}
                value={this.state.diachi}
                placeholder="Địa chỉ"
              />
              <select name="province_id" className="province" required>
                <option value="provine">Tỉnh / Thành phố</option>
                {items.map((item) => (
                  <option
                    value={item.name}
                    key={item.id}
                    onChange={this.handleChange}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              {/* <select name="calc_shipping_district" className='district' required>
                <option value>Quận / Huyện</option>
               
                
              </select>
              <select name="calc_shipping_ward" className='ward' required>
                <option value>Xã / Thị trấn</option>
              </select> */}

              <input
                type="sdt"
                name="so_dien_thoai"
                value={this.state.so_dien_thoai}
                onChange={this.handleChange}
                placeholder="Số điện thoại"
              />
              <input
                type="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Tên đăng nhập"
              />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Mật khẩu"
              />
              <input type="xnpassword" placeholder="Nhập lại mật khẩu" />
              <input type="submit" name="Register" defaultValue="Đăng ký" />
            </form>
          </div>
        </center>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo)),
});

connect(null, mapDispatchToProps)(Signup);
