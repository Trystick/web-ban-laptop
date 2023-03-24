import React from "react";
import { Link } from "react-router-dom";

function Gioithieu(props) {
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
          <Link to="/trangchu">Trang chủ</Link> &gt; Giới thiệu
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.95441038776!2d106.67564341427881!3d10.737997192347574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1678887131440!5m2!1svi!2s"
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
            <strong style={{ color: "black" }}>Địa chỉ:</strong> Trường đại học Công Nghệ Sài Gòn,
            Đường Cao lỗ, Quận 8, Thành Phố Hồ Chí Minh
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
            <strong style={{ color: "black" }}>Điện thoại:</strong> 0933972541
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
     
    </div>
  );
}

export default Gioithieu;
