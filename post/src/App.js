import './App.css';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import {ColorModeContext} from "./theme/theme"

function App() {
  const {ToggleSwitch, darkMode} = useContext(ColorModeContext)
  const [data, setData] = useState([]);


  const getData = async () => {
    // const res = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
    try {
      const res = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097"
        }
      })

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert('dahiad yavul');
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={`container ${darkMode && 'dark'}`}>
      <div className='text'>POSTS</div>
      <div className='toggle'>
        <label class="switch">
          <input type="checkbox" onClick={ToggleSwitch}></input>
          <span class="slider round"></span>
        </label>
      </div>
      <div className="posts">
        {data.map((cur) =>
          <div className="post">
            <img src={cur.image} style={{ width: '400px', height: '400px', borderRadius: "30px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
