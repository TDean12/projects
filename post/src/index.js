import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostPage } from "./page/page-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();