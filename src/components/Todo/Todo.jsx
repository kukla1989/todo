import React from "react";
import DeleteSVG from "../../style/SVGs/DeleteSVG";
import EditSVG from "../../style/SVGs/EditSVG";

const Todo = ({ todo, deleteTodo, startEditTodo }) => {
  const startEdit = () => startEditTodo(todo[1]);

  return (
    <div className="todo">
      <p className="todo__info">{todo[0]}</p>

      <div className="todo__change-buttons">
        <EditSVG startEdit={startEdit}/>
        <DeleteSVG deleteTodo={deleteTodo} id={todo[1]}/>
      </div>
    </div>
  );
};

export default Todo;
