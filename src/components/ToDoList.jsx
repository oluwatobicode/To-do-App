export default function ToDoList({ item, onDeleteItems, handleChecked }) {
  return (
    <li className="list">
      <button
        type="text"
        className="completed"
        id={item.packed ? "checked" : {}}
        name="checkbox--tasks"
        onClick={() => handleChecked(item.id)}
      ></button>
      <div className="tasks">
        <p
          className="description-todo"
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          {item.description}
        </p>
      </div>
      <span onClick={() => onDeleteItems(item.id)}>
        <img
          src="./images/icon-cross.svg"
          className="close-btn"
          alt="close-btn"
        />
      </span>
    </li>
  );
}
