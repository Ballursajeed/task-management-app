import { Router } from "express";
import { getTodos, savaTodo, updateTodo, deleteTodo } from "../controllers/todo.controller.js"

const router = Router();

router.get("/get",getTodos);
router.post("/save",savaTodo);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",deleteTodo)

export default router;