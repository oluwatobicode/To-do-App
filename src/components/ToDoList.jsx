export default function ToDoList({ item, onDeleteItems }) {
  return (
    <li className="list">
      <div
        type="text"
        className="completed checked"
        name="checkbox--tasks"
      ></div>
      <div className="tasks">
        <p className="description-todo completed-task">{item.description}</p>
      </div>
      <span onClick={() => onDeleteItems(item.id)}>
        <img
          src="./src/images/icon-cross.svg"
          className="close-btn"
          alt="close-btn"
        />
      </span>
    </li>
  );
}
