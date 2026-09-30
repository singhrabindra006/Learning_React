import React from "react";

const TodoItem = () => {
  let todoName = "Buy Milk";
  let todoDate = "10/08/2026";
  return (
    <>
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
