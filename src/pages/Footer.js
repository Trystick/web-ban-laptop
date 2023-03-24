import React from 'react';
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname === "/") return null;
  if (pathname === "/dangky") return null;
 
    return (
        <div>
             <footer>
          <section className="footer">
            <article style={{ textAlign: "left" }}>
              <h4>CỬA HÀNG PHÂN PHỐI LAPTOP - LAPTOP TMH</h4>
              <p style={{ color: "darkgrey" }}>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "white", fontSize: "20-px" }}
                />{" "}
                <strong style={{ color: "white" }}>Địa chỉ:</strong> Trường đại học Công Nghệ Sài Gòn,
            Đường Cao lỗ, Quận 8, Thành Phố Hồ Chí Minh
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
                0933972541
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

export default Footer;