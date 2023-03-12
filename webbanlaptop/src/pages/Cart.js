import React from "react";
import { Link } from "react-router-dom";

function Cart() {
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
      <div className="wrap cf">
        <div className="heading cf">
          <h1>Giỏ hàng của bạn</h1>
          <a href="http:\\example.com" className="continue" alt="">
            Tiếp tục mua sắm
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sản phẩn</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd">
              <td className="product-detail">
                  <img
                    src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                    alt=""
                    class="itemImg"
                  />
                <p class="itemNumber">#QUE-007544-002</p>
                <h3>Item Name 1</h3>
                <p class="stockStatus">In Stock</p>
              </td>
              <td>
                <input type="text" class="qty" placeholder="3" />
              </td>
              <td>$15.00</td>
              <td>
                <button href="#" class="remove">
                  x
                </button>
              </td>
            </tr>
            <tr class="even">
              <td className="product-detail">
                <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  class="itemImg"
                />
                <p class="itemNumber">#QUE-007544-002</p>
                <h3>Item Name 1</h3>
                <p class="stockStatus">In Stock</p>
              </td>
              <td>
                <input type="text" class="qty" placeholder="3" />
              </td>
              <td>$15.00</td>
              <td>
                <button href="#" class="remove">
                  x
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="promoCode">
          <label for="promo">Có mã giảm giá?</label>
          <input type="text" name="promo" placholder="Enter Code" />
          <button href="http:\\example.com" className="btn-icon"></button>
        </div>

        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Tạm tính</span>
              <span className="value">$35.00</span>
            </li>

            <li className="totalRow">
              <span className="label">Phí vận chuyển</span>
              <span className="value">$5.00</span>
            </li>

            <li className="totalRow">
              <span className="label">Thuế</span>
              <span className="value">$4.00</span>
            </li>
            <li className="totalRow final">
              <span className="label">Tổng cộng</span>
              <span className="value">$44.00</span>
            </li>
            <li className="totalRow" style={{ padding: "0", marginBottom: "50px"}}>
              <a href="http:\\example.com" className="btn-icon continue">
                Thanh toán
              </a>
            </li>
          </ul>
        </div>
      </div>
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
                      style={{
                        color: "white",
                        fontSize: 35,
                        width: "3%",
                        margin: "0 10px",
                      }}
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
                      style={{
                        color: "white",
                        fontSize: 35,
                        width: "3%",
                        margin: "0 10px",
                      }}
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
                      style={{
                        color: "white",
                        fontSize: 35,
                        width: "3%",
                        margin: "0 10px",
                      }}
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
                      style={{
                        color: "white",
                        fontSize: 35,
                        width: "3%",
                        margin: "0 10px",
                      }}
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
export default Cart;
