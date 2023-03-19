import "./Header.css";
import Button from "../../components/Button";

export default function Header({ user, onLogout }) {
  if (user) {
    return (
      <div className="Header">
        <h1>{user.username}'s Todos</h1>
        <Button onClick={onLogout}>log out</Button>
      </div>
    );
  } else {
    return (
      <div className="Header">
        <h1>Todo</h1>
      </div>
    );
  }
}
