import "./card.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ text, image, tags, firstName, id, width, height }) => {
  // function text({ value }) {
  //   const deleteComment = () => {
  //     const newComment = list.filter((cur) => cur !== value);
  //     setComment(newComment);
  //   };
  // }

  // function App() {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [searchValue, setSearchValue] = useState("");

  const onPressSubmit = () => {
    console.log(inputValue);
  };
  // const setComment = [inputValue]
  return (
    
    <div className="cardContainer">
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
        <input
          id="comment-box"
          type="text"
          className="post1"
          placeholder="comment"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setComment([...comment, inputValue]);
              setInputValue("");
            }
          }}
        ></input>
        <img
          onClick={(onPressSubmit) => {
            setComment([...comment, inputValue]);
            setInputValue("");
          }}
          value="Click me"
          className="img"
          id="post"
          src="https://www.svgrepo.com/show/230979/send.svg"
          intrinsicsize="512 x 512"
          srcSet="https://www.svgrepo.com/show/230979/send.svg 4x"
        />
      </div>

      <div className="garj">
        {comment.map((value, index) => (
          <Commentt value={value} index={index} comment={comment} setComment={setComment} />
        ))}
      </div>
    </div>
  );
  // }
};

function Commentt({ value, comment, setComment, index }) {
  const deleteComment = () => {
    const newComment = comment.filter((cur, i) => i !== index);
    setComment(newComment);
  };

  return (
    <div className="task-container">
      <p>{`${value}`}</p>
      <img
        className="trash"
        src="https://img.icons8.com/clouds/512/full-trash.png"
        onClick={deleteComment}
      />
    </div>
  );
}
