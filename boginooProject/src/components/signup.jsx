import React from "react";
import "../App.css";
import logo from "../assets/logo2.png";

const Signup = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <p className="loginHerhen">Хэрхэн ажилладаг вэ?</p>
      <img className="loginLogo" src={logo} />
      <p className="topSignupText">Бүртгүүлэх</p>
      <div>
        <p className="emailP">Цахим хаяг</p>
        <input placeholder="name@mail.domain" className="emailInput"></input>
      </div>
      <div>
        <p className="passP">Нууц үг</p>
        <input type="password" className="passInput" />
        <p className="passP2">Нууц үгээ давтна уу?</p>
        <input type="password" className="passInput2" />
        <button className="signup">
          <p className="signupText">Бүртгүүлэх</p>
        </button>
      </div>
    </div>
  );
};
export default Signup;
