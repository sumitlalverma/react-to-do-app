const todoSchema = require("../models/todo-model");

const getAllTodos = async (req, res) => {
  const { search } = req.query;
  try {
    let query = {};
    if (search) {
      const regex = new RegExp(`^${search}`);
      query = { name: { $regex: regex, $options: "i" } };
    }
    const todos = await todoSchema
      .find(query)
      .sort({ _id: -1, isComplete: -1 });

    res.status(200).send({ todos });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const createNewTask = async (req, res) => {
  try {
    const task = req.body;
    const todos = new todoSchema(task);
    const resp = await todos.save();
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const data = req.body;
    const resp = await todoSchema.findOneAndUpdate({ _id: taskId }, data);
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const resp = await todoSchema.findOneAndRemove({ _id: taskId });
    res.status(200).send("Task delete successfullly");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  getAllTodos,
  createNewTask,
  updateTask,
  deleteTask,
};
