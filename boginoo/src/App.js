import './App.css';
import logo from './svg/logo-default.png'

function App() {
  return (
    <div className="container">
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <div className="top">
        <div className='txt1'>Хэрхэн ажилладаж вэ?</div>
        <div className='nevtreh'><div className='txt2'>Нэвтрэх</div></div>
      </div>
      <div className='center'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='grp1'>
          <input className='input' placeholder='https://www.web-huudas.mn'></input>
          <div className='bogin' onClick={''}><div className='txt3'>Богиносгох</div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
