import { useState } from "react";

import "./AddTodo.css";
import Button from "../../components/Button";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <form
      className="AddTodo"
      onSubmit={(event) => {
        event.preventDefault();
        onAdd(title);
      }}
    >
      <input
        className="AddTodo__Input"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Button>add</Button>
    </form>
  );
}
