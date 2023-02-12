import React from "react";
import { createNewTask } from "../../apis/todo-api";

const AddNewTask = ({ getTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask({ name: e.target.name.value }, getTodos);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 task-container">
      <input
        placeholder="Write your task..."
        className="add-new-task-input"
        type="text"
        name="name"
      />
      <button className="add-new-task-button" type="submit">
        + Add
      </button>
    </form>
  );
};

export default AddNewTask;
