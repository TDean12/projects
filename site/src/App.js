import logo from './logo.svg';
import './App.css';
import backgorund from './svg/background.jpg'

function App() {
  return (
    <div className="container">
      <div className="background" style={{ background: `url(${backgorund})` }}>
        <div className="group1">
        </div>
        <div className="group2"></div>
        <div className="group3"></div>
      </div>
    </div>
  );
}

export default App;
