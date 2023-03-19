import { useState } from "react";
import "./App.css";
import LoginScreen from "./features/login/LoginScreen";
import {
  fetchAddTodo,
  fetchDeleteTodo,
  fetchTodosByUser,
  fetchUpdateTodo,
} from "./api/todos";
import AddTodo from "./features/add-todo/AddTodo";
import TodoList from "./features/todolist/TodoList";
import Header from "./features/header/Header";

function App() {
  const [todos, setTodos] = useState([]);
  // idle / loading / success / error
  const [todosStatus, setTodosStatus] = useState("idle");

  const [activeUser, setActiveUser] = useState(null);

  async function login(user) {
    setActiveUser(user);
    loadTodos(user);
  }

  function logout() {
    setActiveUser(null);
    setTodos([]);
  }

  async function loadTodos(user) {
    setTodosStatus("loading");
    try {
      const todos = await fetchTodosByUser(user._id);
      setTodos(todos);
      setTodosStatus("success");
    } catch (e) {
      console.log(e);
      setTodosStatus("error");
    }
  }

  async function addTodo(title) {
    await fetchAddTodo({ userId: activeUser._id, title: title });
    await loadTodos(activeUser);
  }

  async function deleteTodo(id) {
    await fetchDeleteTodo(id);
    await loadTodos(activeUser);
  }

  async function updateTodo(todo) {
    await fetchUpdateTodo(todo._id, todo);
    await loadTodos(activeUser);
  }

  let mainContent;

  if (!activeUser) {
    mainContent = <LoginScreen onLogin={login} />;
  } else {
    if (todosStatus === "loading") {
      mainContent = <div>loading todos</div>;
    } else if (todosStatus === "error") {
      mainContent = <div>error when loading todos</div>;
    } else {
      mainContent = (
        <div className="App__MainContent">
          <AddTodo onAdd={(title) => addTodo(title)} />
          <TodoList
            todos={todos}
            onDelete={deleteTodo}
            onChangeTodo={updateTodo}
          />
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Header user={activeUser} onLogout={logout} />
      {mainContent}
    </div>
  );
}

export default App;
