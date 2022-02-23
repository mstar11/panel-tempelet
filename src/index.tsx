import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./compoents/LogIn"
import SignUp from "./compoents/SignUp"

ReactDOM.render(
  <BrowserRouter>
  <Routes> 
    <Route path="/" element={<App />}/> 
    <Route path="/login" element={<Login />}/> 
    <Route path="/signUp" element={<SignUp />}/> 
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


