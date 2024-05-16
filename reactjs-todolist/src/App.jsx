import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import "./index.css"

function App() {
  const [todos, setTodos] = useState([
    "1", 
    "2"
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeletTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeletTodo={handleDeletTodo}/>
    </>
  )
}

export default App
