import React from "react";
import DeleteSVG from "../../style/SVGs/DeleteSVG";
import EditSVG from "../../style/SVGs/EditSVG";

const Todo = ({ todo, deleteTodo, startEditTodo, toggleIsCompleted }) => {
  const { id, isCompleted } = todo;
  const startEdit = () => startEditTodo(id);
  const todoToggleIsCompleted = () => toggleIsCompleted(id);

  return (
    <div
      className="todo"
      onClick={todoToggleIsCompleted}
      style={{ backgroundColor: isCompleted ? '#43346f' : '#845AFD' }}>
      <p
       className="todo__info"
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {todo.task}
      </p>

      <div className="todo__change-buttons">
        <EditSVG startEdit={startEdit} />
        <DeleteSVG deleteTodo={deleteTodo} id={id} />
      </div>
    </div>
  );
};

export default Todo;
