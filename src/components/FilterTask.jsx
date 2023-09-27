import { useState } from "react";

export default function FilterTask({ items }) {
  const [filter, setFilter] = useState([]);

  let filterAray;
  filterAray = items;

  //Show EVERYTHING
  function showAll(id) {
    setFilter(filter);
  }

  // SHOW ACTIVE ( NOT YET COMPLETED)
  function showActive(packed) {
    //filter by pending
  }

  //Show COMPLETED
  function handleShowCompleted(packed) {
    //filter by completed
  }
  return (
    <div className="task-filter">
      <button onClick={() => {}}>All</button>
      <button onClick={() => {}}>Active</button>
      <button onClick={() => {}}>Completed</button>
    </div>
  );
}
