import React from "react";

const TodoItem1 = () => {
  let todName = "GO to School";
  let todoDate = "4/10/1026";
  return (
    <>
      <div className="row kg-row">
        <div className="col-4">{todName}</div>
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

export default TodoItem1;
