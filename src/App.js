import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/todo_item";
import Button from "./components/Button";
import counter from "./components/counterComponent";

import "./style.css";
import CounterComponent from "./components/counterComponent";

const App = () => {
  return (
     <div className="todo-container">
      <CounterComponent />
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Study"/>
      <TodoItem text="Sleep Again"/>
      <Button />
     </div>
  );
};

export default App;
