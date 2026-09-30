import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";

const App = () => {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "09/12/2026",
    },
    {
      name: "Go to School",
      date: "09/12/2026",
    },
    {
      name: "Go to College",
      date: "10/12/2026",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
