import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Chitietsanpham = ({handleClick}) =>{
   const {idSanpham} = useParams();
   
   const [data, setData] = useState([]);   
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://web-laptopp.herokuapp.com/product/${idSanpham}`)
      setData(res.data)
    }
    fetchPosts()
  }, [])

  console.log(idSanpham)
  console.log(data);
  const dataArray = [data];
 
  console.log(dataArray);
 
    return (
        <><div>
            <br />
            <p className="linkk" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontSize: 20 }}>
                <Link to="/trangchu">Trang chủ</Link> &gt; Chi tiết sản phẩm
            </p>
        </div>
       
        <section className="half_half">
                {dataArray.map((item) => (
                    <ul>
                    <li key={item.id}>
              
                    {console.log(item)}
                         <h2 style={{ marginLeft: '2.4em', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{item.tenSanPham}</h2><hr style={{ marginLeft: '3.5em', marginRight: '3.5em' }} />
                             <article>
                             <img src={item.hinhanh} alt='lỗi không hiển thị' style={{ width: '100%',height:'100%', marginLeft: '6.5em' }} />
                           
                             <ul className="button" style={{ marginLeft: '10.5em' }}>
                                    <li><Link to="/trangchu"><button className="button-btn" name="button" type="button">Xem thêm</button></Link></li>
                                    <li><Link to="/cart" ><button onClick={()=> handleClick(item)} className="button-btn" name="button" type="button"><i className="fas fa-cart-plus" /></button></Link></li>
                                </ul>
                            </article>
                            <article style={{ textAlign: 'left', float:'right', marginRight:'80px' }}>
                                <h2 style={{ color: 'red', fontSize: 28, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Giá tiền: {item.giaTien} VND</h2>
                                <div className="qua-tang">
                                    <ul className="list-unstyled">
                                        <ul style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                                            <li>Balo laptop chính hãng (chi tiết).</li>
                                            <li>Vệ sinh máy, tra keo tản nhiệt.</li>
                                            <li>Cài đặt phần mềm miễn phí.</li>
                                            <li>Hỗ trợ giao hàng toàn quốc (Hỗ trợ COD).</li>
                                            <li>Cân chỉnh màu sắc màn hình miễn phí bằng Spyder 5 Elite.</li>
                                            <li>Hỗ trợ sao lưu dữ liệu miễn phí, nhanh chóng.</li>
                                            
                                            <li>Bảo hành: {item.baoHanh}</li>
                                            <h2 style={{ marginTop: '1.4em', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Mô tả sản phẩm</h2>
                                                <li>{item.moTa}</li>
                                                <li>Nhà sản xuất: {item.thongSoKyThuat}</li>
                                        </ul>
                                    </ul>
                                </div>
                            </article>  
                    </li>
                    </ul>
             ))}
            </section>
            </>
    );
}

export default Chitietsanpham;