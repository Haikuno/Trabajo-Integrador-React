import { useState } from "react";
import "./App.css";
import { TodoAdd } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useTodo } from "./hooks/useTask";

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
	// No hace falta react fragment si la etiqueta inicial es un div
    <>
      <div className="card-to-do">
        <h1>TasksList Argentina Programa</h1>
        <div className="counter-tasks">
          <h3>
            N° Tareas: <span>{todosCount}</span>
          </h3>
          <h3>
            Pendientes: <span>{pendingTodosCount}</span>
          </h3>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TaskList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default App;
