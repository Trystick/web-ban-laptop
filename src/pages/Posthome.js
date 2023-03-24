import React from 'react';
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Posthome({posthome}) {

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px'
      }
      
      const slideImages = [
        {
          url: 'https://i.pinimg.com/originals/6d/fc/c0/6dfcc011bc76292827d71b5061861897.jpg',
          caption: 'ASUS'
        },
        {
          url: 'https://th.bing.com/th/id/R.339fe1c43c573e048ad636c028a7229b?rik=NKRkzDKvZw0Wvg&pid=ImgRaw&r=0',
          caption: 'HP'
        },
        {
          url: 'https://cdn.wallpapersafari.com/42/75/FSc3GC.jpg',
          caption: 'LENOVO'
        },
        {
          url: 'https://maytinhvui.com/wp-content/uploads/2021/02/hinh-nen-macbook-logo-qua-tao1.jpg',
          caption: 'MAC'
        },
        {
          url: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-nen-msi-wallpaper-4k-cho-may-tinh-pc.jpg',
          caption: 'MSI'
        },
        {
          url: 'https://images4.alphacoders.com/107/thumb-1920-1073752.jpg',
          caption: 'GYGABYTE'
        },
      ];
      return (
          <div>
             
             <marquee behavior="scroll" direction="left"> 
            <p style={{ fontSize: 24 }}>
              <strong>
                <i
                  className="fas fa-bullhorn"
                  style={{ color: "red", fontSize: 30 }}
                />
                [TƯNG BỪNG KHAI TRƯƠNG] Giảm giá 20% trên tổng hoá đơn cho tất cả
                khách hàng từ ngày 01/06/2023 đến ngày 30/06/2023
                <i
                  className="fas fa-bullhorn"
                  style={{ color: "red", fontSize: 30 }}
                />
              </strong>
            </p>
             </marquee> 
            <div className="slide-container">
              <Slide>
              {slideImages.map((slideImage, index)=> (
                  <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                      <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                  </div>
                ))} 
              </Slide>
            </div>
            <br/>
            <section>
                 <h1>Các Loại Laptop nổi bật</h1>
                 <br/>
                {
                    posthome.map((item) => ( 
                    
                        <ul key = { item.id } >
                           <article>
                            <img
                              src= {item.hinhanh[0].hinhanh}
                             
                              style={{ width: "70%" }}
                              alt="Lỗi không thể hiển thị"
                            />
                            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
                            { item.tenSanPham }
                            </h3>
                            <h3 style={{ fontFamily: '"Open Sans", sans-serif' }}>
                            { item.giaTien } VND
                            </h3>
                            <Link to={`/sanpham/${item.id}`}>
                              <button className="button-btn" name="button" type="button">
                                Xem Ngay
                              </button>
                            </Link>
                            </article>
                        </ul>
                    ))
                }
              
            </section>
           
          </div>
    );
}

export default Posthome;