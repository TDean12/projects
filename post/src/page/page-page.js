import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/card";
import { instance } from "./home-page";

export const PostPage = () => {
  const { postId } = useParams();
  const [data, setData] = useState({});
  const getPostData = async () => {
    const res = await instance.get(`/post/${postId}`);
    setData(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div
      className="App"
      style={{ color: "white", height: "300px", width: "300px" }}
    >
      <Card
        text={data.text}
        image={data.image}
        tags={data.tags}
        firstName={data.names}
        width={"300px"}
        height={"300px"}
      />
    </div>
  );
};
