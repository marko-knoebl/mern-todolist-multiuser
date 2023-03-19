// loads demo data from an API
// and inserts it into our database

import { connect, disconnect } from "mongoose";
import TodoModel from "./models/todo.model.js";
import UserModel from "./models/user.model.js";
import { MONGO_URL } from "./config.js";

async function populateDb() {
  // delete all existing data
  await TodoModel.deleteMany({});
  await UserModel.deleteMany({});

  const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!resUsers.ok) {
    throw new Error("unable to fetch");
  }
  const usersFromApi = await resUsers.json();

  for (let apiUser of usersFromApi) {
    console.log(`creating db entries for user ${apiUser.username}`);
    const resTodos = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${apiUser.id}`
    );
    const todos = await resTodos.json();

    // create user
    const dbUser = await UserModel.create({
      name: apiUser.name,
      username: apiUser.username,
      email: apiUser.email,
    });

    // create todos for user
    for (let todo of todos) {
      await TodoModel.create({
        title: todo.title,
        completed: todo.completed,
        uId: "foo",
        userId: dbUser._id,
      });
    }
  }
}

await connect(MONGO_URL);
await populateDb();
await disconnect();
