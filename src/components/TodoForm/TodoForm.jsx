import React, { useState } from 'react';


const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}> 
      <input 
        type="text"
        className="todo-form__input" 
        placeholder='write todo here' 
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button className="todo-form__submit" type='submit'>add task</button>
    </form>
  )
}

export default TodoForm
