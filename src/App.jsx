import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import CodingNinja from "./components/CodingNinja";
import InputTask from "./components/InputTask";
import OrderTask from "./components/OrderTask";
import ReorderTasks from "./components/ReorderTasks";
import List from "./components/List";
import FilterTask from "./components/FilterTask";
import { func } from "prop-types";

export default function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all"); // Initialize filter state with "all"

  //Adds a new item to the list(todo array)
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //removes an item from the list(todo array)
  function handleDeleteItems(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  //clear Items
  function handleClearItems() {
    setItems([]);
  }

  //CHECKED
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Show ALL items
  function showAll() {
    setFilter("all");
  }

  // Show ACTIVE items (NOT YET COMPLETED)
  function showActive() {
    setFilter("active");
  }

  // Show COMPLETED items
  function showCompleted() {
    setFilter("completed");
  }

  // Modify the List component to filter items based on the filter state
  const filteredItems = items.filter((item) => {
    if (filter === "active") {
      return !item.packed;
    } else if (filter === "completed") {
      return item.packed;
    }
    return true; // "all" filter or default
  });

  return (
    <div className="app">
      <Logo />

      <InputTask onAddItems={handleAddItems} />

      <List
        items={filteredItems}
        onDeleteItems={handleDeleteItems}
        handleChecked={handleChecked}
      />

      <OrderTask items={filteredItems} onHandleClear={handleClearItems} />

      <FilterTask
        items={filteredItems}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />

      <ReorderTasks />

      <CodingNinja />
    </div>
  );
}
