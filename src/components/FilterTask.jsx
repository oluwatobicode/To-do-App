import { useState } from "react";

export default function FilterTask({
  items,
  showAll,
  showActive,
  showCompleted,
}) {
  return (
    <div className="task-filter">
      <button onClick={showAll}>All</button>
      <button onClick={showActive}>Active</button>
      <button onClick={showCompleted}>Completed</button>
    </div>
  );
}
