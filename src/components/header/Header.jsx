import "./header.css";
import Navbar from "./Navbar";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [toggle,setToggle] = useState(false);
  const navigate=useNavigate()
  return (
    <div className="header">
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div onClick={()=>navigate('/login')} className="header-login">
        تسجيل الدخول
        <i className="bi bi-person-fill"></i>
    </div>
    </div>
  );
};

export default Header;
