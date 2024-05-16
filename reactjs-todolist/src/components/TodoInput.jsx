import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos} = props
  const [todoValue, setTodoValue] = useState("")

  function handleInputChange(event) {
    setTodoValue(event.target.value)
  }

  return (
    <header>
      <input type="text" placeholder='Enter todo...' value={todoValue} onChange={handleInputChange}/>
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue("")
      }} >Add</button>
    </header>
  )
}