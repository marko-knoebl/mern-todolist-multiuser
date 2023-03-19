import { useState, useEffect } from "react";
import { fetchUsers } from "../../api/users";
import ListItem from "../../components/ListItem";
import "./LoginScreen.css";

export default function LoginScreen({ onLogin }) {
  const [users, setUsers] = useState([]);
  // loading / success / error
  const [usersStatus, setUsersStatus] = useState("loading");

  useEffect(() => {
    async function loadUsers() {
      setUsersStatus("loading");
      try {
        const users = await fetchUsers();
        setUsers(users);
        setUsersStatus("success");
      } catch (e) {
        setUsersStatus("error");
      }
    }
    loadUsers();
  }, []);

  if (usersStatus === "loading") {
    return <div className="LoginScreen">loading users</div>;
  } else if (usersStatus === "error") {
    return <div className="LoginScreen">error when loading users</div>;
  } else {
    return (
      <div className="LoginScreen">
        <div>Log in as:</div>
        <div className="LoginScreen__List">
          {users.map((user) => (
            <ListItem key={user.username} onClick={() => onLogin(user)}>
              {user.username}
            </ListItem>
          ))}
        </div>
      </div>
    );
  }
}
