import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItems";
import Button from "./components/Button";

import "./style.css";
const App = () => {
  return (
    <div className="todo-container">
      <Header title="Todo App"/>
      <TodoItem text="Eat" />
      <TodoItem text="Code" />
      <TodoItem text="Read book" />
      <TodoItem completed={true} text="Study" />
      <TodoItem text="Sleep again" />
      <Button />
    </div>
  );
};

export default App;
