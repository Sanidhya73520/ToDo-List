import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Todo from './components/Todo'

function App() {
  const [inputval , setVal] = useState('')
  const [todo, setTodo] = useState([])

  function writeTodo(e){
    setVal(e.target.value)
  }
  function addTodo(){
    if(inputval!=''){
        setTodo((prevTodo)=>[...prevTodo, inputval])
        setVal('')
      }
  }
  function delTodo(todoIndex){
    setTodo((prevTodo)=>prevTodo.filter((prevTodo,prevTodoIndex)=>{
      return prevTodoIndex!=todoIndex
    }))
  }

  return (
    <>
      <h1>To Do List</h1>
      <Input inputval={inputval} writeTodo={writeTodo} addTodo={addTodo}/>
      <Todo todo={todo} delTodo={delTodo}/>
      
    </>
  )
}

export default App
