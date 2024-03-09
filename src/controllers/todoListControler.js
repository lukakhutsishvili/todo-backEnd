import todoList from "../models/todo-list.js";

export const getAllTodo = async (req, res) => {
  const data = await todoList.find();
  return res.json(data);
};
