import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo2.png";
import axios from 'axios'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/register', {
        email,
        password,
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

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
        <input placeholder="name@mail.domain" className="emailInput" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <p className="passP">Нууц үг</p>
        <p className="passP2">Нууц үгээ давтна уу?</p>
        <input type="password" className="passInput2" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className="signup" onClick={handleSignup}>
          <p className="signupText">Бүртгүүлэх</p>
        </button>
      </div>
    </div>
  );
};
export default Signup;
