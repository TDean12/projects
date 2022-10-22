  import React, { useState } from 'react';
  import './App.css';

  function App() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    return (
      <div className="App">
        <div className='container'>
          <h1>TodoList</h1>
          <div className='content-container'>
            <input value={inputValue} className='input' placeholder='NewTask' onChange={(e) => setInputValue(e.target.value)} />
            <div>
              <input value={searchValue} className='input' placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />
            </div>

            <Button className="button1" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Click me" />
          </div>

          <div className='tasks'>
        {list.filter((todo) => todo.toLowerCase().includes(searchValue.toLowerCase())).map((todo, index) => <Text value={todo} index={index} list={list} setList={setList} />)}
      </div>
        </div>
        <div className='container2'>
          <div className='Search'>Search</div>
          <input className='searchinput'></input>
        </div>
      </div>
    );
  }


  function Text({ value, index, list, setList }) {
    const deleteTodo = () => {
      const newList = list.filter((cur) => cur !== value);
      setList(newList);
    }

    return (
      <div className='task-container'>
        <input className='checkbox' type={'checkbox'} />
        <p>{`Task # ${index + 1} ${value}`}</p>

        <Button className="button1" onClick={deleteTodo} value="Delete" />
      </div>
    )
  }


  function Button(props) {
    return <button className={props.className} onClick={props.onClick}>{props.value}</button>
  }

  export default App;