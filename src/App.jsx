import TodoList from './components/Todolist/TodoList'
import './App.scss'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [navOpen, setNavopen] = useState(false);
  useEffect(() => {
    console.log('app render');
    if (localStorage.getItem('todo-list')) {
      setTodoList(JSON.parse(localStorage.getItem('todo-list')));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  }, [todoList])
  const addToList = async (e) => {
    if (todoValue.length === 0) {
      alert('Enter a todo');
      return;
    }
    setTodoList([...todoList, { todoid: uuidv4(), key: uuidv4(), value: todoValue, done: false }])
    e.target.parentNode.firstChild.value = ''
    setTodoValue('');
  }
  return (
    <div className="App">
      <div onClick={() => { setNavopen(prevState => !prevState) }} className="twolines">
        -
      </div>
      {
        navOpen ? <Sidebar setNavopen={setNavopen} /> : null
      }
      <Routes>
      <Route path='/about' element={<About/>}/>
        <Route path="*" element={
          <>
            <div className="hero">
              <h1>
                todo
              </h1>
            </div>
            <div className='todo-input'>
              <input type="text" placeholder='enter todo' onChange={(e) => { setTodoValue(e.target.value) }} />
              <button className="add-task-btn" onClick={(e) => { addToList(e) }}>+</button>
            </div>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </>
        }/>
      </Routes>

    </div>
  )
}

export default App;
