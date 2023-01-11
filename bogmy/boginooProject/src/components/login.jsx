import React from "react";
import "../App.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <p className="loginHerhen">Хэрхэн ажилладаг вэ?</p>
      <img className="loginLogo" src={logo} />
      <div className="nevtreh">
      <p className="topLoginText">Нэвтрэх</p>
      <div className="nevtreh">
        <div>
          <p className="emailP">Цахим хаяг</p>
          <input placeholder="name@mail.domain" className="emailInput"></input>
        </div>
        <div>
          <p className="passP">Нууц үг</p>
          <input type="password" className="passInput" />
        </div>
        <div>
          <input type="checkbox" className="rememberCheck" />
          <p className="rememberP">Намайг сана</p>
          <button className="forgotPassTextOnLogin">Нууц үгээ мартсан</button>
        </div>
        <button className="loginButtonOnLogin">
          <p className="loginButtonOnLoginText">Нэвтрэх</p>
        </button>
        <Link to="/signup">
          <button className="signupOnLogin">
            <p>Шинэ хэрэглэгч бол энд дарна уу?</p>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
