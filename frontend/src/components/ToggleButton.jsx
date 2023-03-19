import "./ToggleButton.css";

export default function ToggleButton({ children, selected, onSelectedChange }) {
  return (
    <button
      className={
        selected
          ? "ToggleButton ToggleButton--Selected"
          : "ToggleButton ToggleButton--Unselected"
      }
      onClick={() => onSelectedChange(!selected)}
    >
      {children}
    </button>
  );
}
