import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
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
                    <Link to="/dangnhap">Đăng nhập</Link>
                    <Link to="/dangky">Đăng ký</Link>
                  </div>
                </div>
              </li>
              <li>
                <p> </p>
              </li>
              <li>
                <Link to="/cart">
                  <button id="cart">
                    <i
                      className="fas fa-shopping-cart"
                      style={{ color: "white", fontSize: 25 }}
                      align="middle"
                    />
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/gioithieu">Giới thiệu</Link>
            </li>
            <div className="dropdown">
              <Link to={"/Sanpham"}>
                <button className="dropbtn">Sản phẩm</button>
              </Link>
              <div align="left" className="dropdown-content">
                <Link to="/vanphong">Laptop Văn Phòng</Link>
                <Link to="/dohoakythuat">Laptop Đồ Hoạ - Kỹ Thuật</Link>
                <Link to="/gaming">Laptop Gaming</Link>
                <Link to="/linhkien">Linh kiện</Link>
              </div>
            </div>
            <li>
              <Link to="/hoidap">Hỏi đáp</Link>
            </li>
          </ul>
        </nav>
        {/* <marquee behavior="scroll" direction="left"> */}
        <p style={{ fontSize: 24 }}>
          <strong>
            <i
              className="fas fa-bullhorn"
              style={{ color: "red", fontSize: 30 }}
            />
            [TƯNG BỪNG KHAI TRƯƠNG] Giảm giá 20% trên tổng hoá đơn cho tất cả
            khách hàng từ ngày 01/06/2020 đến ngày 30/06/2020
            <i
              className="fas fa-bullhorn"
              style={{ color: "red", fontSize: 30 }}
            />
          </strong>
        </p>
        {/* </marquee> */}

        <a href="chitietsanpham.html">
          <div className="background1" />
        </a>
        <a href="chitietsanpham.html">
          <div className="background2" />
        </a>
        <a
          id="scrollUp"
          href="#top"
          style={{ position: "fixed", zIndex: 1001, display: "inline-block" }}
        >
          <i className="fa fa-angle-up"></i>
        </a>
        <section>
          <article>
            <img
              src="assets/img/dell/xps132in1.png"
              style={{ width: "100%" }}
              alt=""
            />
            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
              Dell XPS 13 2in1
            </h3>
            <a href="chitietsanpham.html">
              <button className="button-btn" name="button" type="button">
                Xem Ngay
              </button>
            </a>
          </article>
          <article>
            <img
              src="assets/img/hp/hp-spectre.png"
              style={{ width: "100%" }}
              alt=""
            />
            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
              Hp Spectre
            </h3>
            <a href="chitietsanpham.html">
              <button className="button-btn" name="button" type="button">
                Xem Ngay
              </button>
            </a>
          </article>
          <article>
            <img
              src="assets/img/lenovo/X1carbonGen6.png"
              style={{ width: "100%" }}
              alt=""
            />
            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
              Lenovo Thinkpad X1 Carbon 6th Gen
            </h3>
            <a href="chitietsanpham.html">
              <button className="button-btn" name="button" type="button">
                Xem Ngay
              </button>
            </a>
          </article>
        </section>
        <section className="half-half">
          <article>
            <img
              src="assets/img/linhkien/ssd.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
              SSD cho tốc độ vượt trội
            </h3>
            <a href="linhkien.html">
              <button className="button-btn" name="button" type="button">
                Nâng Cấp Ngay
              </button>
            </a>
          </article>
          <article>
            <img
              src="assets/img/linhkien/ram.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
              RAM càng nhiều xử lý càng nhanh!
            </h3>
            <a href="linhkien.html">
              <button className="button-btn" name="button" type="button">
                Nâng Cấp Ngay
              </button>
            </a>
          </article>
        </section>
        <footer>
          <section className="footer">
            <article style={{ textAlign: "left" }}>
              <h4>CỬA HÀNG PHÂN PHỐI LAPTOP - LAPTOP TMH</h4>
              <p style={{ color: "darkgrey" }}>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "white", fontSize: "20-px" }}
                />{" "}
                <strong style={{ color: "white" }}>Địa chỉ:</strong> số 200,
                đường Trần Văn Ơn, phường Phú Hoà, thành phố Thủ Dầu Một, tỉnh
                Bình Dương
              </p>
              <p>Copyright © Nhom16 - D19 - STU</p>
            </article>
            <article style={{ textAlign: "center" }}>
              <h4>MẠNG XÃ HỘI</h4>
              <nav className="scocialmedia">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/your.tranminhhieu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-facebook-square"
                        style={{ color: "white", fontSize: 35, width: "3%" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/hieu.khongcuoi/?hl=vi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-instagram"
                        style={{ color: "white", fontSize: 35, width: "3%" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCHWVn_vlEo3Pbi9B9DIiezQ?view_as=subscriber"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-youtube"
                        style={{ color: "white", fontSize: 35, width: "3%" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/TrnMinh44608963"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-twitter"
                        style={{ color: "white", fontSize: 35, width: "3%" }}
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
            <article style={{ textAlign: "left" }}>
              <p style={{ color: "darkgrey" }}>
                <i
                  className="fas fa-phone"
                  style={{ color: "white", fontSize: "20-px" }}
                />{" "}
                <strong style={{ color: "white" }}>Điện thoại:</strong>{" "}
                0346489037
              </p>
              <p style={{ color: "darkgrey" }}>
                <i
                  className="fas fa-envelope"
                  style={{ color: "white", fontSize: "20-px" }}
                />{" "}
                <strong style={{ color: "white" }}>Mail:</strong>{" "}
                laptoptmh@gmail.com
              </p>
              <p style={{ color: "darkgrey" }}>
                <i
                  className="fas fa-clock"
                  style={{ color: "white", fontSize: "20-px" }}
                />{" "}
                <strong style={{ color: "white" }}>Giờ mở cửa:</strong> 8:00 đến
                22:00 tất cả các ngày trong tuần
              </p>
            </article>
          </section>
        </footer>
      </div>
    </React.Fragment>
  );
}
