import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../../features/todo/todoSlice";

const Main = () => {
  const [editingTodoID, setEditingTodoId] = useState("");
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch();

  const startEditTodo = (id) => setEditingTodoId(id);
  const toggleIsCompleted = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.isCompleted = !todo.isCompleted;
  };

  const editTodo = (todo, newTask) => {
    dispatch(edit({ id: todo.id, task: newTask }))
    setEditingTodoId("");
  };

  return (
    <div className="main">
      <TodoForm />
      {todos.map((todo) =>
        todo.id === editingTodoID ? (
          <TodoForm todo={todo} editTodo={editTodo} key={todo.id} />
        ) : (
          <Todo
            todo={todo}
            key={todo.id}
            startEditTodo={startEditTodo}
            toggleIsCompleted={toggleIsCompleted}
          />
        )
      )}
    </div>
  );
};

export default Main;
