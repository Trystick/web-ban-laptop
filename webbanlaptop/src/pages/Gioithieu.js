import React from "react";
import { Link } from "react-router-dom";

function Gioithieu(props) {
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
      <div className="container">
        <br />
        <p
          className="linkk"
          style={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: 20,
          }}
        >
          <Link to="/">Trang chủ</Link> &gt; Giới thiệu
        </p>
      </div>
      <hr style={{ marginLeft: "3.5em", marginRight: "3.5em" }} />
      <a
        id="scrollUp"
        href="#top"
        style={{ position: "fixed", zIndex: 1001, display: "inline-block" }}
      >
        <i className="fa fa-angle-up"></i>
      </a>
      <section className="gioithieu">
        <article>
          <h1
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "left",
              color: "lightseagreen",
              paddingLeft: "2em",
              fontSize: 24,
            }}
          >
            TMH
          </h1>
          <p
            style={{
              textAlign: "left",
              fontSize: 20,
              fontFamily: '"Open Sans", sans-serif',
              paddingLeft: "2em",
            }}
          >
            Chuyên phân phối các loại laptop, phụ kiện chính hãng. Chúng tôi cam
            kết mang đến cho khách hàng những sản phẩm chất lượng với giá thành
            hợp lý
          </p>
        </article>
        <article>
          <img src="assets/img/laptop.png" style={{ width: "70%" }} alt="" />
        </article>
      </section>
      <section className="gioithieu">
        <article>
          <img
            src="assets/img/cho-thue-laptop-10-1024x576.jpg"
            style={{ width: "70%" }}
            alt=""
          />
        </article>
        <article>
          <h1
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "left",
              color: "lightseagreen",
              paddingRight: "2em",
              fontSize: 24,
            }}
          >
            LĨNH VỰC KINH DOANH
          </h1>
          <p
            style={{
              textAlign: "left",
              fontSize: 20,
              fontFamily: '"Open Sans", sans-serif',
              paddingRight: "2em",
            }}
          >
            TMH luôn cam kết đem lại những sản phẩm công nghệ tiên tiến, chất
            lượng cao của các hãng sản xuất hàng đầu thế giới. Sản phẩm của
            chúng tôi cung cấp bao gồm các thiết bị máy tính, các linh phụ
            kiện,… TMH luôn nỗ lực cung cấp cho khách hàng trải nghiệm mua sắm
            hoàn hảo nhất.
          </p>
        </article>
      </section>
      <section className="gioithieu">
        <article>
          <h1
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "left",
              color: "lightseagreen",
              paddingLeft: "2em",
              fontSize: 24,
            }}
          >
            ĐỘI NGŨ NHÂN VIÊN
          </h1>
          <p
            style={{
              textAlign: "left",
              fontSize: 20,
              fontFamily: '"Open Sans", sans-serif',
              paddingLeft: "2em",
            }}
          >
            Đội ngũ nhân lực của TMH luôn được chọn lọc kỹ càng trước khi trải
            qua các quá trình đào tạo. Chúng tôi cập nhật thường xuyên những
            kiến thức sản phẩm mới nhất, không ngừng nâng cao trình độ chuyên
            môn kỹ thuật và tác phong giao tiếp với khách hàng luôn được chú
            trọng. Chúng tôi xem khả năng làm hài lòng khách hàng là thước đo
            thành công của chính mình.
          </p>
        </article>
        <article>
          <img src="img/nhanvien.jpg" style={{ width: "70%" }} alt="" />
        </article>
      </section>
      <section className="gioithieu">
        <article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.768503376213!2d106.67340511411798!3d10.9808383583916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d12751d25b8f%3A0x2be4c502a03aa8b9!2zMjAwIFRy4bqnbiBWxINuIMagbiwgUGjDuiBIb8OgLCBUaOG7pyBE4bqndSBN4buZdCwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1591718332515!5m2!1svi!2s"
            width={500}
            height={350}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="Trống"
          />
        </article>
        <article>
          <h1
            style={{
              fontFamily: '"Open Sans", sans-serif',
              textAlign: "left",
              color: "lightseagreen",
              paddingRight: "2em",
              fontSize: 24,
            }}
          >
            THÔNG TIN LIÊN LẠC
          </h1>
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingRight: "2em",
              fontSize: 20,
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "black", fontSize: "20-px" }}
            />{" "}
            <strong style={{ color: "black" }}>Địa chỉ:</strong> số 200, đường
            Trần Văn Ơn, phường Phú Hoà, thành phố Thủ Dầu Một, tỉnh Bình Dương
          </p>
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingRight: "2em",
              fontSize: 20,
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            <i
              className="fas fa-phone"
              style={{ color: "black", fontSize: "20-px" }}
            />{" "}
            <strong style={{ color: "black" }}>Điện thoại:</strong> 0346489037
          </p>
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingRight: "2em",
              fontSize: 20,
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            <i
              className="fas fa-envelope"
              style={{ color: "black", fontSize: "20-px" }}
            />{" "}
            <strong style={{ color: "black" }}>Mail:</strong>{" "}
            laptoptmh@gmail.com
          </p>
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

export default Gioithieu;
