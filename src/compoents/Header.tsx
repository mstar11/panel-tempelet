import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Styles/header.css";
import {Link} from "react-router-dom"
interface setItems{
  activebar:boolean,
  setActivebar:React.Dispatch<React.SetStateAction<boolean>>,
}

const Header: React.FC<setItems>=({activebar,setActivebar}) => {
  const [active, setActive] = useState<boolean>(false);

  
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else if (window.scrollY == 0) {
      setActive(false);
    }
  });

  return (
    <div className="contetn-header">
      <section className={`header ${active ? "active" : ""}`}>
        <div className={`logo ${activebar ? "active" : ""}`}>
          <a target={"_blank"} href="https://github.com/mstar11">
            <GitHubIcon />
            <p>STAR11</p>
          </a>
        </div>
        <div className="left-header">
          <a>HOME</a>
          <a>COMPONENTS</a>
          <a>PAGES</a>
          <a>SETTING</a>
          <a>CONTACT US</a>
          
          <Link to="/login" className="btnHeader">SIGN IN</Link>
        </div>
        <div
          className="left-header-response"
          onClick={() => setActivebar(!activebar)}
        >
          <MenuIcon className="menuicone" />
        </div>
      </section>
   
    </div>
  );
};

export default Header;
