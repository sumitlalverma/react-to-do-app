import { callApi } from "../components/helper";

export const getAllTodos = async (searchQuery, callBack) => {
  const { todos } = await callApi(`todos?search=${searchQuery}`);
  callBack(todos);
};

export const createNewTask = async (data, callBack) => {
  const { todo } = await callApi("todos", "POST", data);
  callBack(todo);
};

export const updateTask = async (id, data, callBack) => {
  const { todo } = await callApi(`todos/${id}`, "PUT", data);
  callBack(todo);
};

export const deleteTask = async (id, callBack) => {
  const { todo } = await callApi(`todos/${id}`, "DELETE");
  callBack(todo);
};
