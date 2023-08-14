import React, { useState } from 'react'
import classes from "./todo.module.css"
import Header from './Header'
import Form from './Form'
import TodoList from './TodoList'
import { useEffect } from 'react'

function Todo() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState("")

  useEffect(() => {
    if (todos) {
        localStorage.setItem("todo-data", JSON.stringify(todos))
    }
}, [todos])


  return (
   
      <div className={classes.todoContainer}>
        <div className={classes.todoWrapper}>
            <Header/>
            <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
            <TodoList
            setEditTodo={setEditTodo}
            setTodos = {setTodos}
            todos={todos}/>
            </div>  
        </div>
    
  )
}

export default Todo