import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>home</div>
  )
}
const About = () => {
  return (
    <div>about</div>
  )
}
const SignUp = () => {
  return (
    <div>sign up</div>
  )
}
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/home'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
        <br />  
        <Link to='/signup'>Signup</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;