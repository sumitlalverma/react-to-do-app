require("./connection"); // db connection
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRouter = require("./src/routers/todo-router");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/todos", todoRouter);
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
