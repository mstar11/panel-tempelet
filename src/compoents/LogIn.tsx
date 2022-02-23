import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Login.css";

function SignIn() {
  const [username, setUserName] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const navigate = useNavigate();
  const testemail:any = /^[a-zA-Z][\w\W]{5,30}$/;
  const testpassword:any =/^[A-Z][\w\W]{8,30}$/

  return (
    <div className="signin">
            <Link to="/" className="goHome">Home</Link>
      <div className="mainsignin">
              {/* {errore ? <p className="passnottru">password or email is not true</p>:""} */}
        <input
        className={testemail.test(username)?"inputvalid" :"inputisinvalid"}
          type="email"
          placeholder="  sample@gmail.com"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
        className={testpassword.test(password)? "inputvalid" :"inputisinvalid"}
          type="password"
          placeholder="  password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button
        className="loginbtn"
          onClick={(e) =>e.preventDefault() }>
          LOG IN
        </button>
         <Link to="/signUp" className="intothesignin">Sin up</Link>
      </div>
    </div>
  );
}

export default SignIn;
