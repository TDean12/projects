import "./App.css";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { ColorModeContext } from "./theme/theme";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const { ToggleSwitch, darkMode } = useContext(ColorModeContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=10`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });
      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert("dahiad yavul");
    }
  };

  // onClickCard();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`container ${darkMode && "dark"}`}>
      <div className="top">
        <div className={`text9 ${darkMode ? "light" : "darkMode"}`}>POSTS</div>
        <div className="toggle">
          <label class="switch">
            <input type="checkbox" onClick={ToggleSwitch}></input>
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div className="posts">
        {data.map((cur) => (
          <Card cur={cur} />
        ))}
      </div>
    </div>
  );
}
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>;
const Card = (props) => {
  const { cur } = props;

  const navigation = useNavigate();

  const onClickCard = () => {
    navigation(`/post/${cur.id}`);
  };
  const [clicked, setClicked] = useState(false);
  const [like, setLike] = useState(cur.likes);
  const { ToggleSwitch, darkMode } = useContext(ColorModeContext);
  return (
    <div className={`post ${darkMode ? "light" : "darkMode"}`}>
      <img
        src={cur.image}
        onClick={onClickCard}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "30px",
        }}
      />
      <div className="names">
        <img
          src={cur.owner.picture}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "90px",
          }}
        />
        <div className="firstName">{cur.owner.firstName}</div>
        <div className="lastName">{cur.owner.lastName}</div>
      </div>
      <div className="tag">
        {cur.tags.map((tag) => (
          <div>#{tag}</div>
        ))}
      </div>
      <div className="group1">
        {/* button hiih heseg */}
        <div
          className="heart-btn"
          onClick={() => {
            setLike(like + 1);
            setClicked(true);
          }}
        >
          <div className="content">
            <span
              className={`heart ${clicked && "heartClicked"}`}
            ></span>
            <span className="like">Like</span>
            <span className="numb">{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
