import "./TodoList.css";
import TodoItem from "./TodoItem";
import ToggleButton from "../../components/ToggleButton";
import { useState } from "react";

export default function TodoList({
  todos,
  onDelete,
  onChangeTodo,
}) {
  // can be: all / incomplete / completed
  const [show, setShow] = useState("all");

  let visibleTodos = todos;
  if (show === "incomplete") {
    visibleTodos = todos.filter((t) => !t.completed);
  } else if (show === "completed") {
    visibleTodos = todos.filter((t) => t.completed);
  }

  return (
    <div className="TodoList">
      <div className="TodoList__FilterButtons">
        <ToggleButton
          selected={show === "all"}
          onSelectedChange={(selected) => {
            if (selected) {
              setShow("all");
            }
          }}
        >
          all
        </ToggleButton>
        <ToggleButton
          selected={show === "incomplete"}
          onSelectedChange={(selected) => {
            if (selected) {
              setShow("incomplete");
            }
          }}
        >
          incomplete
        </ToggleButton>
        <ToggleButton
          selected={show === "completed"}
          onSelectedChange={(selected) => {
            if (selected) {
              setShow("completed");
            }
          }}
        >
          completed
        </ToggleButton>
      </div>
      <div className="TodoList__List">
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={onDelete}
            onChangeTodo={onChangeTodo}
          />
        ))}
      </div>
    </div>
  );
}
