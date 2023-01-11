import react from "react";
import logo from "../assets/logo-default.png";
import "../App.css";
import { Link } from "react-router-dom";
import Login from "./login";
const Home = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <div classname="topContainer">
        <p className="herhen">Хэрхэн ажилладаг вэ?</p>
        <Link to="/login">
          <button className="loginButton">
            <p className="loginButtonText">Нэвтрэх</p>
          </button>
        </Link>
      </div>
      <img className="logo" alt="logo" src={logo} />
      <div className="inputContainer">
        <input
          class="inputText"
          placeholder="https://www.web-huudas.mn"
        ></input>
        <button className="shortenButton">
          <p className="shortenButtonText">Богиносгох</p>
        </button>
      </div>
    </div>
  );
};
export default Home;
