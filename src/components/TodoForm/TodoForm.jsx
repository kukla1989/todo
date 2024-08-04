import React, { useEffect, useState } from "react";

const TodoForm = ({ addTodo, todo = null, editTodo }) => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (todo) {
      setNewTask(todo[0]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    todo ? editTodo(todo, newTask) : addTodo(newTask);
    setNewTask("");

    // console.log(todo, "todo");
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
