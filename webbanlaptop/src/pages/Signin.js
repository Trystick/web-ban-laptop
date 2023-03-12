import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoginFetch } from "./action";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userLoginFetch(this.state);
  };

  render() {
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
          <div className="loginbox">
            <img src="assets/img/avatar.png" className="avatar"alt="" />
            <h1>Đăng nhập</h1>
            <form onSubmit={this.handleSubmit}>
              <p>Tên đăng nhập</p>
              <input
                type="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Tên đăng nhập"
              />
              <p>Mật khẩu</p>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Mật khẩu"
              />
              <input type="submit" name="Login" defaultValue="Login" />
              <a href="http://example.com">Quên mật khẩu?</a>
              <br />
              <Link to="/dangky">Bạn chưa có tài khoản? Đăng ký ngay!</Link>
            </form>
          </div>
        </center>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginFetch: (userInfo) => dispatch(userLoginFetch(userInfo)),
});

connect(null, mapDispatchToProps)(Login);
