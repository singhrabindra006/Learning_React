import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import TodoItem1 from "./component/TodItem1";
import "./App.css";

const App = () => {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item-container">
        <TodoItem></TodoItem>
        <TodoItem1></TodoItem1>
      </div>
    </center>
  );
};

export default App;
