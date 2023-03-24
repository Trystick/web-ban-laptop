import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Signup = () =>  {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    ten_khach_hang: "",
    email: "",
    diachi: "",
    province_id: "",
    // district_id:"",
    // ward_id:"",
    so_dien_thoai: "",
    username: "",
    password: "",
  })
  

  const [province, setProvince] = useState([]);
  // const [provinceid, setProvinceid] = useState('');
  // const [district, setDistrict]  = useState([]);
  // const [districtid, setDistrictid] = useState('');
  // const [ward, setWard] = useState([]);
  

  useEffect(() =>{
    const getProvince = async() => {
      const resProvince =  await axios("https://web-laptopp.herokuapp.com/province");
      setProvince(resProvince.data);
    }
    getProvince();
  },[])

  // useEffect(() =>{
  //   const getDistrict = async() => {
  //     const resDistrict = await axios(`https://web-laptopp.herokuapp.com/district/${provinceid}`);
  //     setDistrict(resDistrict.data);
  //   }
  //   getDistrict();
  // },[provinceid]);

  // useEffect(() =>{
  //   const getWard = async() => {
  //     const resWard = await fetch(`https://web-laptopp.herokuapp.com/ward/${districtid}`);
  //     setWard(resWard.data);
  //     console.log(resWard);
  //   }
  //   getWard(); 
  // },[districtid]);

  // function handldeProvince(e){
  //   const getProvinceid = e.target.value;
  //   setProvinceid(getProvinceid);
  // }

  // function handleDistrict(e){
  //   const getDistrictid = e.target.value;
  //   setDistrictid(getDistrictid);
  // }
  
  function getData(e){
    const {value, name} = e.target;
  //  handldeProvince(e);
  //  handleDistrict(e)
  console.log(inpval);
  window.localStorage.setItem('Account Register', JSON.stringify(inpval));
  setInpval(()=> {
    return {
          ...inpval,
          [name]:value
      }
    })
  }
  console.log(JSON.stringify(inpval));
  function APIPostRegister(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inpval)
  };
   fetch('https://web-laptopp.herokuapp.com/customer/register', requestOptions)
      .then((response) => {
        if (response.status === 206 || response.status === 201) {
          alert("Đăng ký thành công");
          localStorage.setItem('Acount user', response.text);
          history('/')
        }else{
          alert("Have problem....");
        }
    })
  }

  const addData = (e) => {
     e.preventDefault();
     APIPostRegister();
  }
    
    return (
      <div>
        <center>
          <div className="signupbox">
            <img src="assets/img/avatar.png" className="avatar" alt=""/>
            <h1>Đăng ký tài khoản</h1>
              <form>
              <input
                type="hovaten"
                name="ten_khach_hang"
                onChange={getData}
                placeholder="Họ và tên"
              />
              <input
                type="email"
                name="email"
                onChange={getData}
                placeholder="Email"
              />
              <input
                type="diachi"
                name="diachi"
                onChange={getData}
                placeholder="Địa chỉ"
              />
              <select name="province_id" className="province"  onChange={getData} required>
                <option value="provine">Tỉnh / Thành phố</option>
                  {
                   province && province.map(item => (
                      <option key={item.id}>
                          {item.name}
                      </option>
                    ))
                  }
              </select>
              {/* <select name="district_id" className='district' onChange={ handleDistrict} required>
                <option value="district">Quận / Huyện</option>
                {
                  district &&  district.map(item => (
                      <option key={item.id}>
                          {item.name}
                      </option>
                    ))
                }
              </select>
              <select name="ward_id" className='ward' onChange={getData} required>
                <option value="ward">Xã / Thị trấn</option>
                {
                    ward && ward.map(item => (
                      <option key={item.id}>
                          {item.name}
                      </option>
                    ))
                  }
              </select> */}
              <input
                type="sdt"
                name="so_dien_thoai"
                onChange={getData}
                placeholder="Số điện thoại"
              />
              <input
                type="username"
                name="username"
                onChange={getData}
                placeholder="Tên đăng nhập"
              />
              <input
                type="password"
                name="password"
                onChange={getData}
                placeholder="Mật khẩu"
              />
              <input type="submit" name="Register" onClick={addData} defaultValue="Đăng ký" />
            </form>
          </div>
        </center>
      </div>
    );
  }
// }

export default Signup;