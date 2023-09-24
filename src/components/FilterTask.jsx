export default function FilterTask({ items }) {
  return (
    <div className="task-filter">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
