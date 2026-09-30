import React, { useState } from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";

const App = () => {
  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName}  Date:${itemDueDate}`);

    const newTodoItem = {
      name: itemName,
      date: itemDueDate,
    };

    const newTodoItems = [...todoItems, newTodoItem];

    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
