import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div className='main'>
      <TodoForm addTodo={addTodo}/>
      {/* {
        todos.map((todo, ind) => <p key={ind}>{todo}</p>)
      } */}

      <Todo />
    </div>
  )
}

export default Main
