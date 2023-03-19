import { Router } from "express";
import Todo from "../models/todo.model.js";

const todosRouter = Router();

todosRouter.get("/", async (req, res) => {
  const mongoQuery = {};
  if (req.query.userId) {
    mongoQuery.userId = req.query.userId;
  }
  const todos = await Todo.find(mongoQuery);
  res.json(todos);
});

todosRouter.post("/", async (req, res) => {
  await Todo.create(req.body);
  res.json({ status: "successs" });
});

todosRouter.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

todosRouter.delete("/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id });
  res.json({ status: "success" });
});

todosRouter.patch("/:id", async (req, res) => {
  await Todo.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json({ status: "success" });
});

todosRouter.put("/:id", async (req, res) => {
  await Todo.replaceOne({ _id: req.params.id }, req.body);
  res.json({ status: "success" });
});

export default todosRouter;
