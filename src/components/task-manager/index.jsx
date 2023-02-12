import React, { useEffect, useState } from "react";
import { deleteTask, getAllTodos, updateTask } from "../../apis/todo-api";

import SearchInput from "../common/search-input";
import AddNewTask from "./AddNewTask";

import "./task-manager.css";

const TaskManager = () => {
  const [editTextId, setEditTextId] = useState(null);
  const [editText, setEditText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([]);

  const onEditCancel = () => {
    setEditTextId(null);
  };

  const onEditText = (_id, value) => {
    setEditTextId(_id);
    setEditText(value);
  };

  const getTodos = () => {
    getAllTodos(searchQuery, setTasks); // getting all tasks
    setEditTextId(null);
  };

  const onUpdateTask = () => {
    updateTask(editTextId, { name: editText }, getTodos); // update task
  };

  const onComplete = (_id) => {
    updateTask(_id, { isComplete: true }, getTodos); // mark as a complete
  };

  const onDeleteTask = (_id) => {
    deleteTask(_id, getTodos); // delete a task.
  };

  useEffect(() => {
    getTodos();
  }, [searchQuery]);


  return (
    <div className="task-manager-container">
      <div className="d-flex space-between px-30">
        <SearchInput onSearch={setSearchQuery} />
        <AddNewTask getTodos={getTodos} />
      </div>

      <div className="task-list-container">
        {tasks.map(({ name, _id, isComplete }, index) => {
          return (
            <div key={index} className="task-row">
              <div className="w-50">
                <input
                  disabled={isComplete}
                  type="checkbox"
                  checked={isComplete}
                  onChange={() => onComplete(_id)}
                />
                {editTextId === _id ? (
                  <input
                    className="existing-label-input"
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <label
                    style={{
                      textDecoration: isComplete ? "line-through" : "none",
                    }}
                  >
                    {name}
                  </label>
                )}
              </div>

              {editTextId !== _id ? (
                <div>
                  {!isComplete && <i
                    onClick={() => onEditText(_id, name)}
                    class="fa fa-pencil-square-o"
                    aria-hidden="true"
                  />}
                  <i
                    onClick={() => onDeleteTask(_id)}
                    class="fa fa-trash-o"
                    aria-hidden="true"
                  ></i>
                </div>
              ) : (
                <div>
                  <i
                    onClick={onUpdateTask}
                    class="fa fa-check"
                    aria-hidden="true"
                  ></i>
                  <i
                    onClick={onEditCancel}
                    class="fa fa-times"
                    aria-hidden="true"
                  ></i>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskManager;
