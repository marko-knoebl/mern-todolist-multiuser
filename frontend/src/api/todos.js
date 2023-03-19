import { API_URL } from "../config";

export async function fetchTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  const todos = await res.json();
  return todos;
}

export async function fetchTodosByUser(userId) {
  const res = await fetch(`${API_URL}/todos?userId=${userId}`);
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  const todos = await res.json();
  return todos;
}

export async function fetchAddTodo({ userId, title }) {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, userId: userId }),
  });
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  return { status: "success" };
}

export async function fetchDeleteTodo(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  return { status: "success" };
}

export async function fetchUpdateTodo(id, todo) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  return { status: "success" };
}
