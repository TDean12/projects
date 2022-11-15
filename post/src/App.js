import "./App.css";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { ColorModeContext } from "./theme/theme";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { HomeScreen } from "./page/home-page";
import { PostPage } from "./page/page-page";

function App() {
  const { ToggleSwitch, darkMode } = useContext(ColorModeContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    // const res = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
    try {
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
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
        <div className={`text ${darkMode ? "light" : "darkMode"}`}>POSTS</div>
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

const Card = (props) => {
  const { cur } = props;

  const navigation = useNavigate();

  const onClickCard = () => {
    navigation(`/posts/post`);
  };

  const [like, setLike] = useState(cur.likes);
  console.log(cur);
  const { ToggleSwitch, darkMode } = useContext(ColorModeContext);
  return (
    <div
      className={`post ${darkMode ? "light" : "darkMode"}`}
      onClick={onClickCard}
    >
      <img
        src={cur.image}
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
      <div className="postTxt">{cur.text}</div>
      <button className="likeButton" onClick={() => setLike(like + 1)} >
        {like} Like
      </button>
      <div className="like-btn" href="#">
        <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
      </div>
      <script src="main.js"></script>
    </div>
  );
};

// const tg = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomeScreen />} />
//         <Route path="/post/:postId" element={<PostPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default App;
