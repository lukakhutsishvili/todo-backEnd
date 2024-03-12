import todoList from "../models/todo-list.js";

export const getAllTodo = async (req, res) => {
  const data = await todoList.find();
  const newData = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return res.json(newData);
};

export const addTodo = async (req, res) => {
  try {
    const test = req.body;
    const item = new todoList(test);
    const result = await item.save();
    return res.json({ message: "Successfully created todo", todo: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const updateTodo = async (req, res) =>{
  try {
    
    
  } catch (error) {
    
  }
}
