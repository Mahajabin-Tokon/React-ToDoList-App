import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  function handleInputChange(event) {
    setTodoValue(event.target.value);
  }

  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoValue}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
