import ToDoList from "./ToDoList";

export default function List({ items, onDeleteItems }) {
  return (
    <ul className="list-items">
      {items.map((items) => (
        <ToDoList item={items} key={items.id} onDeleteItems={onDeleteItems} />
      ))}
    </ul>
  );
}
