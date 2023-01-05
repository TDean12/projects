import "./App.css";
import Login from "./components/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Forgot from "./components/forgotpass";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
