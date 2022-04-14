import React from 'react'
import './Todo.scss'
import { useState, useEffect } from 'react'
import TodoList from '../Todolist/TodoList';

export default function Todo({ todoid,value, done,setTodoList }) {
    useEffect(() => {
        console.log('todo render');
    }, [])
    // useEffect(()=>{

    // },[]);
    const setCompleted=(key)=>{
      setTodoList(prevState => prevState.map((todo) => {
          if (todo.todoid === key) {
            return {
              ...todo, done: !todo.done
            }
          }
          return todo;
        }))
      }
      const deleteTask=(id)=>{
         setTodoList(prevState=>prevState.filter((todo)=>{
            return todo.todoid!==id;
        }))
      }
    return (
        <div todoid={todoid} className='todo' >
            <div className='todo-content' style={{textDecoration:done ?  "line-through" :"none", opacity:done?0.6:1.0}}>{value}</div>
            <button className="done-btn" onClick={(e)=>{setCompleted(e.target.parentNode.attributes[0].value)}}>&#10004;</button>
            <button className="delete-btn" onClick={(e)=>{deleteTask(e.target.parentNode.attributes[0].value)}}>&#10006;</button>
        </div>
    )
}
