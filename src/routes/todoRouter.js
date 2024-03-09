import express from "express";
import { getAllTodo } from "../controllers/todoListControler.js";


const todoRouter = express.Router();

todoRouter.get("/todoList", getAllTodo)

export default todoRouter;