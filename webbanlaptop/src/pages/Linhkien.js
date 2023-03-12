import React from "react";
import { Link } from "react-router-dom";
function Linhkien(props) {
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
      <section className="brandpk">
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/adata.png"
              style={{ width: "50%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/kingston.png"
              style={{ width: "90%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/Intel.png"
              style={{ width: "42%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/Crucial.png"
              style={{ width: "90%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/gigabyte.png"
              style={{ width: "100%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/samsung.png"
              style={{ width: "95%" }}
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="#link" target="_blank">
            <img
              src="assets/img/brand/SanDisk.png"
              style={{ width: "90%" }}
              alt=""
            />
          </a>
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
          <Link to="/sanpham"> Sản phẩm</Link> &gt; Linh kiện
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
              src="assets/img/linhkien/SSDKingstonA400240GB.png"
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
              src="assets/img/linhkien/SSDCrucialBX500120GB.png"
              alt=""
            />
          </a>
          <h1>SSD Crucial BX500 3D NAND SATA III 120GB</h1>
          <p style={{ color: "red" }}>
            <strong>640.000 ₫</strong>
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
              src="assets/img/linhkien/ssd-gigabyte-01.png"
              alt=""
            />
          </a>
          <h1>SSD Gigabyte 2.5-Inch SATA III 120GB</h1>
          <p style={{ color: "red" }}>
            <strong>600.000 ₫</strong>
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
              src="assets/img/RAM/kvr-ddr4-2666-4gb-01.png"
              alt=""
            />
          </a>
          <h1>Ram Laptop Kingston DDR4 4GB Bus 2666</h1>
          <p style={{ color: "red" }}>
            <strong>450.000 ₫</strong>
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
              src="assets/img/RAM/CrucialDDR42666_8GB - Copy.png"
              alt=""
            />
          </a>
          <h1>Ram Laptop Crucial DDR4 4GB Bus 2666</h1>
          <p style={{ color: "red" }}>
            <strong>490.000 ₫</strong>
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
              src="assets/img/RAM/samsung_m471a1k43db1-cwe-01.png"
              alt=""
            />
          </a>
          <h1>Ram Laptop Samsung DDR4 8GB Bus 3200MHz</h1>
          <p style={{ color: "red" }}>
            <strong>890.000 ₫</strong>
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
              src="assets/img/HDD/seagate-barracuda-3-5-1tb-1-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>HDD Seagate BarraCuda 1TB 3.5 inch SATA III</h1>
          <p style={{ color: "red" }}>
            <strong>1.000.000 ₫</strong>
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
              src="assets/img/HDD/wd10ezex-e3ac8513-5f2c-4593-821f-440263249073-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>HDD WD Blue 1TB 3.5 inch SATA III</h1>
          <p style={{ color: "red" }}>
            <strong>1.000.000 ₫</strong>
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
              src="assets/img/HDD/wd-purple-1tb-removebg-preview.png"
              alt=""
            />
          </a>
          <h1>HDD WD Purple 1TB 3.5 inch SATA III </h1>
          <p style={{ color: "red" }}>
            <strong>1.400.000 ₫</strong>
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

export default Linhkien;
