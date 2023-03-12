import React from "react";
import { Link } from "react-router-dom";
function Laptopgaming(props) {
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
      <section className="brand">
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/apple.png" style={{ width: "20%" }} alt=""/>
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/microsoft.png"
              style={{ width: "24%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/asus.png" style={{ width: "85%" }} alt=""/>
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/acer.png" style={{ width: "75%" }} alt=""/>
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/dell.png" style={{ width: "24%" }} alt=""/>
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/lenovo.png" style={{ width: "90%" }} alt=""/>
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/hp.png" style={{ width: "25%" }} alt=""/>
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img src="assets/img/brand/msi.png" style={{ width: "70%" }} alt=""/>
          </a>
        </article>
      </section>
      <section className="cost">
        <article>
          <a href="http://example.com">Dưới 5 triệu</a>
        </article>
        <article>
          <a href="http://example.com">5 triệu đến 10 triệu</a>
        </article>
        <article>
          <a href="http://example.com">10 triệu đến 15 triệu</a>
        </article>
        <article>
          <a href="http://example.com">15 triệu đến 25 triệu</a>
        </article>
        <article>
          <a href="http://example.com">Trên 25 triệu</a>
        </article>
      </section>
      <div className="container">
        <br />
        <p
          className="linkk"
          style={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: 20,
          }}
        >
          <Link to="/">Trang chủ</Link> &gt;
          <Link to="/sanpham"> Sản phẩm</Link> &gt; Laptop gaming
        </p>
      </div>
      <a
        id="scrollUp"
        href="#top"
        style={{ position: "fixed", zIndex: 1001, display: "inline-block" }}
      >
        <i className="fa fa-angle-up"></i>
      </a>
      <hr style={{ marginLeft: "3.5em", marginRight: "3.5em" }} />
      <section className="product">
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/AsusTUF.png"
              alt=""
            />
          </a>
          <h1>Asus TUF FA506II-AL016T</h1>
          <p style={{ color: "red" }}>
            <strong>23.990.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/4873_asus_rog_zephyrus_m_gu502gu_az089t__3_.png"
              alt=""
            />
          </a>
          <h1>Asus ROG Zephyrus M GU502GU-AZ089T</h1>
          <p style={{ color: "red" }}>
            <strong>34.990.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/04-G532-Scar-Light_nowat-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>Asus ROG Strix G531GT-AL007T</h1>
          <p style={{ color: "red" }}>
            <strong>20.690.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/DellG7-7590.png"
              alt=""
            />
          </a>
          <h1>Dell Inspiron G7 7590-N7590Z</h1>
          <p style={{ color: "red" }}>
            <strong>38.500.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/hp-pavilion-gaming-15-dk0001tx_1-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>HP Pavilion Gaming 15-dk0000TX</h1>
          <p style={{ color: "red" }}>
            <strong>23.890.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/5210_msi_gl65_leopard_10sdk_242vn_1-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>MSI GL65 10SDK-242VN</h1>
          <p style={{ color: "red" }}>
            <strong>33.490.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/520_P_1571821159538.png"
              alt=""
            />
          </a>
          <h1>Acer Predator Helios 300 PH315-52-78HH 2019</h1>
          <p style={{ color: "red" }}>
            <strong>34.990.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/triton-500-4-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>Acer Predator Triton 500 PT515-51-73AA</h1>
          <p style={{ color: "red" }}>
            <strong>45.990.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/LaptopGaming/gearvn-acer-nitro-5-2_cd6c5d77e5c249b783dda04b39312a06-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>Acer Nitro AN515-54-76RK</h1>
          <p style={{ color: "red" }}>
            <strong>25.990.000 ₫</strong>
          </p>
          <ul className="button">
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-btn" name="button" type="button">
                  <i className="fas fa-cart-plus" />
                </button>
              </a>
            </li>
          </ul>
        </article>
      </section>
      <center>
        <div className="button_num">
          <ul>
            <li>
              <a href="http://example.com">
                <button className="button-num" name="button" type="button">
                  1
                </button>
              </a>
            </li>
            <li>
              <a href="http://example.com">
                <button className="button-num" name="button" type="button">
                  2
                </button>
              </a>
            </li>
          </ul>
        </div>
      </center>
      <footer>
        <section className="footer">
          <article style={{ textAlign: "left" }}>
            <h4>CỬA HÀNG PHÂN PHỐI LAPTOP - LAPTOP TMH</h4>
            <p style={{ color: "darkgrey" }}>
              <i
                className="fas fa-map-marker-alt"
                style={{ color: "white", fontSize: "20-px" }}
              />{" "}
              <strong style={{ color: "white" }}>Địa chỉ:</strong> số 200, đường
              Trần Văn Ơn, phường Phú Hoà, thành phố Thủ Dầu Một, tỉnh Bình
              Dương
            </p>
            <p>Copyright © Trần Minh Hiếu - D18PM01 - TDMU</p>
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
                  <a href="https://twitter.com/TrnMinh44608963" target="_blank" rel="noreferrer">
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
              <strong style={{ color: "white" }}>Điện thoại:</strong> 0346489037
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
  );
}

export default Laptopgaming;
