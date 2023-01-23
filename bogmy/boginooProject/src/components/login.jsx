import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSignin = async () => {
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
          <input placeholder="name@mail.domain" className="emailInput" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        <div>
          <p className="passP">Нууц үг</p>
          <input type="password" className="passInput" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div>
          <input type="checkbox" className="rememberCheck" />
          <p className="rememberP">Намайг сана</p>
          <button className="forgotPassTextOnLogin">Нууц үгээ мартсан</button>
        </div>
        <button className="loginButtonOnLogin" onClick={handleSignin}>
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
