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

  //Show EVERYTHING
  function showAll(items) {
    setItems(items);
  }

  // SHOW ACTIVE ( NOT YET COMPLETED)
  function showActive(packed) {
    setItems((items) =>
      items.filter((item) => (item.packed !== !packed ? item : ""))
    );
  }

  //Show COMPLETED
  function handleShowCompleted(packed) {
    setItems((items) =>
      items.filter((item) => (item.packed === !packed ? item : ""))
    );
  }

  // //Show COMPLETED
  // function handleShowCompleted(id) {
  //   setItems((items) =>
  //     items.filter((item) => (item.id === id ? item : ""))
  //   );
  // }

  return (
    <div className="app">
      <Logo />

      <InputTask onAddItems={handleAddItems} />

      <List
        items={items}
        onDeleteItems={handleDeleteItems}
        handleChecked={handleChecked}
      />

      <OrderTask items={items} onHandleClear={handleClearItems} />

      <FilterTask
        items={items}
        showActive={showActive}
        showAll={showAll}
        handleShowCompleted={handleShowCompleted}
      />

      <ReorderTasks />

      <CodingNinja />
    </div>
  );
}
