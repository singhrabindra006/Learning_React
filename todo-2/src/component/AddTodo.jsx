import React, { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  return (
    <>
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(event) => setTodoDate(event.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => onNewItem(todoName, todoDate)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
