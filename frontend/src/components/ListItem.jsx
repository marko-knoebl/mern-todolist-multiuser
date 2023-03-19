import "./ListItem.css";

export default function ListItem({ children, onClick }) {
  return (
    <div className="ListItem" onClick={onClick}>
      {children}
    </div>
  );
}
