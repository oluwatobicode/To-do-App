import { useState } from "react";

export default function InputTask({ onAddItems }) {
  const [description, setDescription] = useState("");

  const newTasks = { description, packed: false, id: Date.now() };
  // onAddItems(newTasks);
  console.log(newTasks);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    console.log(newTasks);
    onAddItems(newTasks);
    setDescription("");
  }

  return (
    <form className="input-task" onSubmit={handleSubmit}>
      <button className="checkbox1" onClick={handleSubmit}></button>
      <input
        type="text"
        placeholder="Create a new todo....."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-text"
      />
    </form>
  );
}
