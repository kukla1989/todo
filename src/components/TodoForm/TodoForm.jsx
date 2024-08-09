import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { add } from "../../features/todo/todoSlice";

const TodoForm = ({ todo = null, editTodo }) => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) {
      setNewTask(todo.task);
    }
  }, []);

  const addTodo = (task) => {
    if (!task) {
      return;
    }

    const newTodo = { task: task, id: uuidv4(), isCompleted: false };
    dispatch(add(newTodo));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todo ? editTodo(todo, newTask) : addTodo(newTask);
    setNewTask("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form__input"
        placeholder="write todo here"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button className="todo-form__submit" type="submit">
        {todo ? "change" : "add task"}
      </button>
    </form>
  );
};

export default TodoForm;
