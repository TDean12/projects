import logo from './logo.svg';
import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0)
  console.log(inputValue)

  useEffect(() => {
    count.current = count.current + 1;
  })

  const [input, InputValue] = useState("");
  const cout = useRef(0)
  console.log(input)

  useEffect(() => {
    cout.current = cout.current + 1;
  })

  const submit = () => {
    console.log(inputValue);
    alert(inputValue + "   " + input);
    // alert(input);
  }


  return (<div className='tom'>
    <div className='container'>
      <div className='grp1'>
        <div className='sign up'>Sign up</div>
        <div className='zuras'></div>
      </div>
      <div className='name'>Name</div>
      <div className='grp2'>
        <input placeholder='Balence' className='balence' value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
        </input>
      </div>
      <div className='email'>Email</div>
      <div className='grp3'>
        <input className='emaill' value={input} onChange={(a) => InputValue(a.target.value)}>
        </input>
      </div>
      <button onClick={submit} className='submit'> Submit</button>
    </div>
  </div>)
}

export default App;
