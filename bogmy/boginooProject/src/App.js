import "./App.css";
import Login from "./components/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Forgot from "./components/forgotpass";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<Forgot />} />
        </Routes>
      </BrowserRouter>   
  );
}
// // axios.interceptors.request.use(
// //  (config) => {
// //    const token = Cookies.get("token")
//     config.headers.set("token", token);
//     return config;
//   },
//  (error) => {
//   return Promise.reject(error);
//  }
//  )

export default App;
