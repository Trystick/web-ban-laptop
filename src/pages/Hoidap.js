import { Link } from "react-router-dom";
import React from "react";

function Hoidap(props) {
  return (
    <div>
     
      <div className="container">
        <br />
        <p
          className="linkk"
          style={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: 20,
          }}
        >
          <Link to="/trangchu">Trang chủ</Link> &gt; Hỏi đáp
        </p>
      </div>
      <hr style={{ marginLeft: "3.5em", marginRight: "3.5em" }} />
      <center>
        <h1
          style={{
            fontFamily: '"Open Sans", sans-serif',
            textAlign: "center",
            color: "lightseagreen",
            fontSize: 24,
          }}
        >
          LIÊN HỆ VỚI CHÚNG TÔI
        </h1>
        <p1
          style={{
            fontFamily: '"Open Sans", sans-serif',
            textAlign: "center",
            color: "black",
          }}
        >
          Nếu bạn có thắc mắc cần giải đáp, hãy liên hệ với chúng tôi ngay!
        </p1>
      </center>
      <section className="hovaten">
        <article>
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingLeft: "6em",
              fontSize: 17,
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "black", fontSize: "20-px" }}
            />{" "}
            <strong style={{ color: "black" }}>Địa chỉ:</strong> Trường đại học Công Nghệ Sài Gòn,
            Đường Cao lỗ, Quận 8, Thành Phố Hồ Chí Minh
          </p>
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingLeft: "6em",
              fontSize: 17,
              fontFamily: '"Open Sans", sans-serif',
            }}
          >
            <i
              className="fas fa-phone"
              style={{ color: "black", fontSize: "20-px" }}
            />{" "}
            <strong style={{ color: "black" }}>Điện thoại:</strong> 0933972541
          </p>
          <p
            style={{
              color: "black",
              textAlign: "left",
              paddingLeft: "6em",
              fontSize: 17,
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
        <article>
          <li style={{ listStyleType: "none", paddingTop: "1em" }}>
            <form style={{ textAlign: "right", paddingRight: "6em" }}>
              <input
                type="hovaten"
                name="name"
                placeholder="Họ và Tên"
                align="middle"
              />
            </form>
          </li>
          <li style={{ listStyleType: "none", paddingTop: "1em" }}>
            <form style={{ textAlign: "right", paddingRight: "6em" }}>
              <input
                type="hovaten"
                name="name"
                placeholder="Số Điện Thoại"
                align="middle"
              />
            </form>
          </li>
          <li style={{ listStyleType: "none", paddingTop: "1em" }}>
            <form style={{ textAlign: "right", paddingRight: "6em" }}>
              <input
                type="hovaten"
                name="name"
                placeholder="Email"
                align="middle"
              />
            </form>
          </li>
          <li style={{ listStyleType: "none", paddingTop: "1em" }}>
            <form style={{ textAlign: "right", paddingRight: "6em" }}>
              <textarea
                style={{
                  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  fontSize: 17,
                }}
                type="noidung"
                name="nd"
                placeholder="Nội dung"
                align="middle"
                defaultValue={""}
              />
            </form>
          </li>
          <li style={{ listStyleType: "none", paddingTop: "1em" }}>
            <center>
              <button className="btn" name="button" type="button">
                Gửi
              </button>
            </center>
          </li>
        </article>
      </section>
      
    </div>
  );
}

export default Hoidap;
