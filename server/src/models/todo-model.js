const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String },
  isComplete: { type: Boolean, default: false },
});

module.exports = mongoose.model("todos", todoSchema);
