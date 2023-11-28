import React from "react";
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TaskUpdate";

export const TaskItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
		{/* No se le debe asignar a un span la propiedad onClick ya que no es un boton */}
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
		// Podes usar truthy `container-done ${todo.done && "active"}`
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
};
