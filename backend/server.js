import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { MONGO_URL, API_PORT } from "./config.js";
import todosRouter from "./routes/todos.js";
import usersRouter from "./routes/users.js";

await connect(MONGO_URL);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/todos", todosRouter);
app.use("/users", usersRouter);

app.listen(API_PORT);
