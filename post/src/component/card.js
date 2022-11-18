import "./card.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ text, image, tags, firstName, id, width, height }) => {
  const navigation = useNavigate();

  const onClickCard = () => {
    navigation(`/post/${id}`);

    const post = document.getElementById("post");
    post.addEventListener("click", function () {
      const commentBoxValue = document.getElementById("comment-box").value;

      const li = document.createElement("li");
      const text = document.createTextNode(commentBoxValue);
      li.appendChild(text);
      document.getElementById("unordered").appendChild(li);
    });
  };
  return (
    <div className="cardContainer" onClick={onClickCard}>
      <img
        className="cardImage"
        src={image}
        alt={text}
        style={{ width: width, height: height }}
      />
      {/* <Link path="post/${id}"/> */}

      <div className="text">#{tags}</div>
      <div className="text1">#{text}</div>
      <h1 className="text3">{firstName}</h1>
      <div className="comment">
        <input id="comment-box" type="text" className="post1" placeholder="comment"></input>
        <img
          className="img"
          id="post"
          src="https://www.svgrepo.com/show/230979/send.svg"
          intrinsicsize="512 x 512"
          srcSet="https://www.svgrepo.com/show/230979/send.svg 4x"
        />
      </div>
      <div className="garj">
        <ul id="unordered"></ul>
        <img className="trash"
          src="https://img.icons8.com/clouds/512/full-trash.png"
        />
      </div>
    </div>
  );
};
