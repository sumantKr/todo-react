import Todo from '../Todo/Todo'
import './Todolist.scss'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function TodoList({todoList,setTodoList}) {
  useEffect(()=>{
    console.log('todoList render',todoList);
  },[])
  return (
    <div className='todo-list'>
    {
      
      todoList.length===0 ? 
      <p>Nothing here yet . . .</p>
      :
    
      todoList.map((todo)=>{
        return <Todo todoid={todo.todoid} key={todo.key} value={todo.value} done={todo.done} setTodoList={setTodoList}/>
      })
    }
    </div>
  )
}
