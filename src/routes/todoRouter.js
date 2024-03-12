import express from "express";
import { addTodo, getAllTodo } from "../controllers/todoListControler.js";


const todoRouter = express.Router();

todoRouter.get("/todoList", getAllTodo)

todoRouter.post("/send", addTodo);

export default todoRouter;