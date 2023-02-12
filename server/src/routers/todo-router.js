const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../services/todo-service");

// Handling request using router
router.get("/", getAllTodos);
router.post("/", createNewTask);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

// Importing the router
module.exports = router;
