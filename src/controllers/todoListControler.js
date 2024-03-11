import todoList from "../models/todo-list.js";

export const getAllTodo = async (req, res) => {
  const data = await todoList.find();
  const newData = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return res.json(data);
};
