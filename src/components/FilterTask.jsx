export default function FilterTask({
  items,
  showAll,
  showActive,
  handleShowCompleted,
}) {
  return (
    <div className="task-filter">
      <button onClick={() => showAll(items)}>All</button>
      <button onClick={() => showActive(items.packed)}>Active</button>
      <button onClick={() => handleShowCompleted(items.packed)}>
        Completed
      </button>
    </div>
  );
}
