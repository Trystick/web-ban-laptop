import React from 'react';
import { Link } from "react-router-dom";

function Posts({posts}) {
    return (
        <div>
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
      {/* <section className="cost">
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
      </section> */}
      
      <div className="container">
        <br />
        <p
          className="linkk"
          style={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: 20,
          }}
        >
          <Link to="/trangchu">Trang chủ</Link> &gt; Sản phẩm
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
        {
            posts.map((item) => ( 
                <ol key = { item.id } >
         <article>
            <img
              style={{ width: "100%" }}
              src={item.hinhanh[0].hinhanh}
              alt=""
            />
          <h6>{item.tenSanPham}</h6>
          <p style={{ color: "red" }}>
            <strong>{item.giaTien} VND</strong>
          </p>
          <ul className="button">
            <li>
              <Link to={`/sanpham/${item.id}`}>
                <button className="button-btn" name="button" type="button">
                  Xem ngay
                </button>
              </Link>
            </li>
          </ul>
        </article>
      </ol>
            ))
          }
      
      </section>
      {/* <center>
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
      </center> */}
        </div>
    );
}

export default Posts;