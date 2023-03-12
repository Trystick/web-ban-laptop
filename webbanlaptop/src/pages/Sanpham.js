import React from "react";
import { Link } from "react-router-dom";

function Sanpham(props) {
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
            <Link to={"/"}>Trang chủ</Link>
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
            <img
              src="assets/img/brand/apple.png"
              style={{ width: "20%" }}
              alt=""
            />
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
            <img
              src="assets/img/brand/asus.png"
              style={{ width: "85%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/acer.png"
              style={{ width: "75%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/dell.png"
              style={{ width: "24%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/lenovo.png"
              style={{ width: "90%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/hp.png"
              style={{ width: "25%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/msi.png"
              style={{ width: "70%" }}
              alt=""
            />
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
          <Link to="/">Trang chủ</Link> &gt; Sản phẩm
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
          <a href="http://example.com" target="_blank" rel="noreferrer">
            <img
              style={{ width: "70%" }}
              src="assets/img/lenovo/ideapad730s.png"
              alt=""
            />
          </a>
          <h1>Lenovo IdeaPad 730S</h1>
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
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/macbook/pro2019.png"
              alt=""
            />
          </a>
          <h1>Macbook Pro 2019</h1>
          <p style={{ color: "red" }}>
            <strong>44.490.000 ₫</strong>
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
              src="assets/img/dell/xps13_7390.png"
              alt=""
            />
          </a>
          <h1>Dell XPS 13 7390</h1>
          <p style={{ color: "red" }}>
            <strong>32.990.000 ₫</strong>
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
      <section className="product">
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/hp/pavilion15_cs3060TX.png"
              alt=""
            />
          </a>
          <h1>Hp Pavilion 15 cs3060TX</h1>
          <p style={{ color: "red" }}>
            <strong>17.990.000 ₫</strong>
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
              src="assets/img/asus/vivobooks531FA.png"
              alt=""
            />
          </a>
          <h1>Asus Vivobook S15 S531FA-BQ104T</h1>
          <p style={{ color: "red" }}>
            <strong>17.290.000 ₫</strong>
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
              src="assets/img/acer/Aspire5_A515-54-54EU.png"
              alt=""
            />
          </a>
          <h1>Acer Aspire 5 A515-54-54EU</h1>
          <p style={{ color: "red" }}>
            <strong>14.719.000 ₫</strong>
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
      <section className="product">
        <article>
          <a href="http://example.com">
            <img
              style={{ width: "70%" }}
              src="assets/img/OCung/KingStonA400.png"
              alt=""
            />
          </a>
          <h1>SSD Kingston A400 SATA 3 240GB SA400S37/240G</h1>
          <p style={{ color: "red" }}>
            <strong>840.000 ₫</strong>
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
              src="assets/img/OCung/SamSungNVMEPM981a.png"
              alt=""
            />
          </a>
          <h1>SSD Samsung NVMe PM981a M.2 PCIe Gen3 x4 256GB MZ-VLB256B</h1>
          <p style={{ color: "red" }}>
            <strong>1.190.000 ₫ </strong>
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
              style={{ width: "65%" }}
              src="assets/img/RAM/CrucialDDR42666_8GB.png"
              alt=""
            />
          </a>
          <h1>Ram Laptop Crucial DDR4 8GB Bus 2666 (CT8G4SFS8266)</h1>
          <p style={{ color: "red" }}>
            <strong>860.000 ₫ </strong>
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

export default Sanpham;
