import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Styles/Login.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setUserName] = useState<string | number>("");
  const [email, setEmail] = useState<string | number >("");
  const [password, setPassword] = useState<string | number >("");
  const [repeatpassword, setRepeatPassword] = useState<string | number >("");
  const [checkpass,setcheckpass] = useState<boolean>(false);
  const [testpass,setTestpass]= useState<boolean>(false);
  const testusername:any= /^[a-zA-Z][a-zA-Z0-9._]{4,23}$/ ;
  const testemail:any = /^[a-zA-Z][\w\W]{5,30}$/;
  const testpassword:any = /^[A-Z][\w\W]{8,30}$/



  return (
    <div className="signup">
            <Link to="/" className="goHome">Home</Link>
            
      <form className="mainsignup">
        {/* <p className="passnottru">{errore && "Somthing wrong"}</p> */}
        {checkpass ? <p className="passnottru">password not equiled</p>:""}
        <input
        className={testusername.test(name) ? "inputvalid" :"inputisinvalid" }
          type="text"
          placeholder="  username"
          onChange={(e) => 
            setUserName(e.target.value)
          }
        ></input>
        <input
        className={testemail.test(email) ? "inputvalid" :"inputisinvalid" }

          type="email"
          placeholder="  sample@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
         className={testpassword.test(password) ? "inputvalid" :"inputisinvalid"}
          type="password"
          placeholder="  password"
          onChange={(e) => setPassword(e.target.value)}
        required
        ></input>
         <input
         className={testpassword.test(repeatpassword) ? "inputvalid" :"inputisinvalid"}
         type="password"
          placeholder="  repeat password"
          onChange={(e) => setRepeatPassword(e.target.value)}
        required
        ></input>



        <Link to="/login" className="intothesignin">already sign in</Link>
        <button type="button"
        disabled={!(testpassword.test(password) && testemail.test(name) && testemail.test(email))}
        className="loginbtn"
          onClick={(e) => e.preventDefault() }
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default SignUp;
