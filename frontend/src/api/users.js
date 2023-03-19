import { API_URL } from "../config";

export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) {
    throw new Error("Error while fetching");
  }
  const users = await res.json();
  return users;
}
