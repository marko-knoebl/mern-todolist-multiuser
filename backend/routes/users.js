import { Router } from "express";
import User from "../models/user.model.js";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

usersRouter.get("/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.json(user);
});

export default usersRouter;
