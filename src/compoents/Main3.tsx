import React,{useState, useEffect} from 'react'
import "./Styles/Main3.css"

const Main3 = () => {
        const [active, setActive]= useState<boolean>(true);
  return (
        <div className={`content ${active ? "active" : ""}`}>
          <div className="bar-content" onClick={()=> setActive(!active)}>
          <div className="bar"></div>
          </div>
        <div className="main3-content">
            <div className="mainContent">
                <div className="object">
                    <div className="obj-header">discription</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos?</p>
                    <button type="submit" className="btn">Submit</button>
                </div>
            </div>
            
        </div>
        <div className="shadow1"></div>
        <div className="shadow2"></div>
        <div className="navbarRight">
            <div className="nrc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis magni cum debitis eligendi doloribus fugit tempora cumque natus harum.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Main3