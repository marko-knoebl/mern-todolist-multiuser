import "./TodoItem.css";
import Button from "./../../components/Button";
import { useState } from "react";

export default function TodoItem({ todo, onDelete, onChangeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  return (
    <div
      className={
        todo.completed
          ? "TodoItem TodoItem--Completed"
          : "TodoItem TodoItem--Incomplete"
      }
    >
      <div className="TodoItem__Data">
        <input
          className="TodoItem__Checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={(event) =>
            onChangeTodo({ ...todo, completed: event.target.checked })
          }
        />
        {isEditing ? (
          <input
            className="TodoItem__TitleInput"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
        ) : (
          todo.title
        )}
      </div>
      <div className="TodoItem__Buttons">
        {isEditing ? (
          <Button onClick={() => onChangeTodo({ ...todo, title: editedTitle })}>
            save
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>edit</Button>
        )}
        <Button onClick={() => onDelete(todo._id)}>delete</Button>
      </div>
    </div>
  );
}
