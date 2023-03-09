
import {Link} from "react-router-dom";
import React from 'react';

function Hoidap(props) {
    return (
        <div>
          
  <header>
    <nav className="header">
      <ul>
        <li>
        <Link to="/">
            <img src="assets/img/logo2.png" alt="logo" width="40%" align="middle" />
          </Link>
        </li>
        <li>
          <p>
          </p>
        </li>
        <li>
          <form>
            <input type="timkiem" name="search" placeholder="Search..." align="middle" />
            <i className="fas fa-search" style={{color: 'white', fontSize: 23}} align="middle" />
          </form>
        </li>
        <li>
          <p>
          </p>
        </li>
        <li>
          <div className="dropacc">
            <button className="dropaccbtn"><i className="fas fa-user-circle" style={{color: 'white', fontSize: 25}} align="middle" /></button>
            <div align="left" className="dropacc-content">
            <Link to="/dangnhap">Đăng nhập</Link>
            <Link to="/dangky">Đăng ký</Link>
            </div>
          </div>
        </li>
        <li><p> </p></li>
        <li>
          <button className="dropaccbtn">
            <i className="fas fa-shopping-cart" style={{color: 'white', fontSize: 25}} align="middle" />
          </button>                        
        </li>
      </ul>
    </nav>
  </header>
  <nav className="menu">
    <ul>
    <li><Link to= {"/"}>Trang chủ</Link></li>
    <li><Link to="/gioithieu">Giới thiệu</Link></li>
      <div className="dropdown">
      <Link to= {"/Sanpham"}><button className="dropbtn">Sản phẩm</button></Link>
        <div align="left" className="dropdown-content">
        <Link to="/vanphong">Laptop Văn Phòng</Link>
          <Link to="/dohoakythuat">Laptop Đồ Hoạ - Kỹ Thuật</Link>
          <Link to="/gaming">Laptop Gaming</Link>
          <Link to="/linhkien">Linh kiện</Link>
        </div>
      </div> 
      <li><Link to="/hoidap">Hỏi đáp</Link></li>
    </ul>
  </nav>
  <div className="container">
    <br />
    <p className="linkk" style={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: 20}}>
    <Link to="/">Trang chủ</Link> &gt; Hỏi đáp
    </p>
  </div>
  <hr style={{marginLeft: '3.5em', marginRight: '3.5em'}} />
  <center>
    <h1 style={{fontFamily: '"Open Sans", sans-serif', textAlign: 'center', color: 'lightseagreen', fontSize: 24}}>LIÊN HỆ VỚI CHÚNG TÔI</h1>
    <p1 style={{fontFamily: '"Open Sans", sans-serif', textAlign: 'center', color: 'black'}}>Nếu bạn có thắc mắc cần giải đáp, hãy liên hệ với chúng tôi ngay!</p1>
  </center>
  <section className="hovaten">
    <article>
      <p style={{color: 'black', textAlign: 'left', paddingLeft: '6em', fontSize: 17, fontFamily: '"Open Sans", sans-serif'}}><i className="fas fa-map-marker-alt" style={{color: 'black', fontSize: '20-px'}} /> <strong style={{color: 'black'}}>Địa chỉ:</strong> số 200, đường Trần Văn Ơn, phường Phú Hoà, thành phố Thủ Dầu Một, tỉnh Bình Dương</p>
      <p style={{color: 'black', textAlign: 'left', paddingLeft: '6em', fontSize: 17, fontFamily: '"Open Sans", sans-serif'}}><i className="fas fa-phone" style={{color: 'black', fontSize: '20-px'}} /> <strong style={{color: 'black'}}>Điện thoại:</strong> 0346489037</p>
      <p style={{color: 'black', textAlign: 'left', paddingLeft: '6em', fontSize: 17, fontFamily: '"Open Sans", sans-serif'}}><i className="fas fa-envelope" style={{color: 'black', fontSize: '20-px'}} /> <strong style={{color: 'black'}}>Mail:</strong> laptoptmh@gmail.com</p>
    </article>
    <article>
      <li style={{listStyleType: 'none', paddingTop: '1em'}}>
        <form style={{textAlign: 'right', paddingRight: '6em'}}>
          <input type="hovaten" name="name" placeholder="Họ và Tên" align="middle" />
        </form>
      </li>
      <li style={{listStyleType: 'none', paddingTop: '1em'}}>
        <form style={{textAlign: 'right', paddingRight: '6em'}}>
          <input type="hovaten" name="name" placeholder="Số Điện Thoại" align="middle" />
        </form>
      </li>
      <li style={{listStyleType: 'none', paddingTop: '1em'}}>
        <form style={{textAlign: 'right', paddingRight: '6em'}}>
          <input type="hovaten" name="name" placeholder="Email" align="middle" />
        </form>
      </li>
      <li style={{listStyleType: 'none', paddingTop: '1em'}}>
        <form style={{textAlign: 'right', paddingRight: '6em'}}>
          <textarea style={{fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: 17}} type="noidung" name="nd" placeholder="Nội dung" align="middle" defaultValue={""} />
        </form>
      </li>
      <li style={{listStyleType: 'none', paddingTop: '1em'}}>
        <center><button className="btn" name="button" type="button">Gửi</button></center>
      </li>
    </article>
  </section>
  <footer>
    <section className="footer">
      <article style={{textAlign: 'left'}}>
        <h4>CỬA HÀNG PHÂN PHỐI LAPTOP - LAPTOP TMH</h4>
        <p style={{color: 'darkgrey'}}><i className="fas fa-map-marker-alt" style={{color: 'white', fontSize: '20-px'}} /> <strong style={{color: 'white'}}>Địa chỉ:</strong> số 200, đường Trần Văn Ơn, phường Phú Hoà, thành phố Thủ Dầu Một, tỉnh Bình Dương</p>
        <p>Copyright © Trần Minh Hiếu - D18PM01 - TDMU</p>
      </article>
      <article style={{textAlign: 'center'}}>
        <h4>MẠNG XÃ HỘI</h4>
        <nav className="scocialmedia">
          <ul>
            <li>
              <a href="https://www.facebook.com/your.tranminhhieu" target="_blank">
                <i className="fab fa-facebook-square" style={{color: 'white', fontSize: 35, width: '3%'}} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hieu.khongcuoi/?hl=vi" target="_blank">
                <i className="fab fa-instagram" style={{color: 'white', fontSize: 35, width: '3%'}} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCHWVn_vlEo3Pbi9B9DIiezQ?view_as=subscriber" target="_blank">
                <i className="fab fa-youtube" style={{color: 'white', fontSize: 35, width: '3%'}} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TrnMinh44608963" target="_blank">
                <i className="fab fa-twitter" style={{color: 'white', fontSize: 35, width: '3%'}} />
              </a>
            </li>
          </ul>
        </nav>
      </article>
      <article style={{textAlign: 'left'}}>
        <p style={{color: 'darkgrey'}}><i className="fas fa-phone" style={{color: 'white', fontSize: '20-px'}} /> <strong style={{color: 'white'}}>Điện thoại:</strong> 0346489037</p>
        <p style={{color: 'darkgrey'}}><i className="fas fa-envelope" style={{color: 'white', fontSize: '20-px'}} /> <strong style={{color: 'white'}}>Mail:</strong> laptoptmh@gmail.com</p>
        <p style={{color: 'darkgrey'}}><i className="fas fa-clock" style={{color: 'white', fontSize: '20-px'}} /> <strong style={{color: 'white'}}>Giờ mở cửa:</strong> 8:00 đến 22:00 tất cả các ngày trong tuần</p>
      </article>
    </section>
  </footer>
</div>

    );
}

export default Hoidap;