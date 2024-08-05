import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodoID, setEditingTodoId] = useState("");

  const addTodo = (task) => {
    if (!task) {
      return;
    }

    setTodos([...todos, { task: task, id: uuidv4(), isCompleted: false }]);
  };

  const deleteTodoByID = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const startEditTodo = (id) => setEditingTodoId(id);
  const toggleIsCompleted = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.isCompleted = !todo.isCompleted;
    setTodos([...todos]);
  };


  const editTodo = (todoEdit, editedTask) => {
    const todoNeedEdit = todos.find((todo) => todo.id === todoEdit.id);
    todoNeedEdit.task = editedTask;
    setEditingTodoId("");
  };

  return (
    <div className="main">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.id === editingTodoID ? (
          <TodoForm todo={todo} editTodo={editTodo} key={todo.id} />
        ) : (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodoByID}
            startEditTodo={startEditTodo}
            toggleIsCompleted={toggleIsCompleted}
          />
        )
      )}
    </div>
  );
};

export default Main;
