import React, { useState, useEffect } from 'react';
// import {  } from 'react';
import './App.css';



function App() {
  const [timer, setTimer] = useState(0);
  const [stop, setStopper] = useState(0);
  const [control, setControl] = useState('stop');

  useEffect(() => {
    if (control === 'running')
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
  }, [timer, control]);

  useEffect(() => {
    if (control === 'stop')
      setTimeout(() => {
        setTimer(timer);
      },);
  },);
  useEffect(() => {
    if (control === 'reset')
      setTimeout(() => {
        setTimer( 0 );
      },);
  },);

  return (
    <div className="container">
      <div className="buttons">
        {timer}
        <button value="start" onClick={() => { setControl('running') }} >start</button>
        <button className="stop" onClick={() => { setControl('stop') }}>Stop</button>
        <button className="reset" onClick={() => { setControl('reset') }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
