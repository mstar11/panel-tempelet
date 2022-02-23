import React,{ useState} from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import {Link} from "react-router-dom"
interface setItems{
        activebar:boolean,
        setActivebar:React.Dispatch<React.SetStateAction<boolean>>,
}

const LeftSideHeader: React.FC<setItems>=({activebar,setActivebar}) => {
//   const [activebar, setActivebar] = useState<boolean>(false);

  return (
        <section className={`sidebar-content`}>
        <div
          className={`sidebar-content-remove ${activebar ? "active" : ""}`}
          onClick={() => setActivebar(false)}
        ></div>
        <div className={`sidebar ${activebar ? "active" : ""}`}>
          <div className={`logo`}>
            <a target={"_blank"} href="https://github.com/mstar11">
              <GitHubIcon />
              <p>STAR11</p>
            </a>
          </div>
          <Link to="/login" className="btnleftsideheader">SIGN IN</Link>
          <div className="sidebar-items">
            <a>HOME</a>
            <a>COMPONENTS</a>
            <a>PAGES</a>
            <a>SETTING</a>
            <a>CONTACT US</a>
          </div>
        </div>
      </section>
  )
}
export default LeftSideHeader
