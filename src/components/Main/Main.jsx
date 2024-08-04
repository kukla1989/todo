import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodoID, setEditingTodoId] = useState("");
  const addTodo = (todo) => {
    setTodos([...todos, [todo, uuidv4()]]);
  };

  const deleteTodoByID = (id) => setTodos(todos.filter((todo) => todo[1] !== id));

  const editTodo = (todoEdit, editedTask) => {
    const todoNeedEdit = todos.find((todo) => todo[1] === todoEdit[1]);
    todoNeedEdit[0] = editedTask;
    setEditingTodoId('');
  }

  const startEditTodo = id => setEditingTodoId(id);

  return (
    <div className="main">
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) =>
        todo[1] === editingTodoID ? (
          <TodoForm todo={todo} editTodo={editTodo} key={todo[1]}/>
        ) : (
          <Todo
            todo={todo}
            key={todo[1]}
            deleteTodo={deleteTodoByID}
            startEditTodo={startEditTodo}
          />
        )
      )}

      {/* <button onClick={console.log(todos)}>tmp</button> */}
    </div>
  );
};

export default Main;
