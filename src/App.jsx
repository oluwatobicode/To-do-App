import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import Logo from "./Logo";
import CodingNinja from "./CodingNinja";
import InputTask from "./InputTask";

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

  return (
    <div className="app">
      <Logo />

      <InputTask onAddItems={handleAddItems} />

      <List items={items} onDeleteItems={handleDeleteItems} />

      <OrderTask items={items} onHandleClear={handleClearItems} />

      <FilterTask items={items} />

      <ReorderTasks />

      <CodingNinja />
    </div>
  );
}

function List({ items, onDeleteItems }) {
  return (
    <ul className="list-items">
      {items.map((items) => (
        <ToDoList item={items} key={items.id} onDeleteItems={onDeleteItems} />
      ))}
    </ul>
  );
}

function ToDoList({ item, onDeleteItems }) {
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

function OrderTask({ items, onHandleClear }) {
  let tasks;
  tasks = items;

  if (!tasks.length)
    return (
      <div className="pre-footer">
        <p>Start Adding Tasks 🙃</p>
      </div>
    );

  const allTasks = items.length;

  return (
    <footer className="footer">
      <div className="footer-items">
        <p>
          {allTasks}
          {tasks.length < 1 ? `No task` : " items left"}
        </p>
        <div>
          <button onClick={onHandleClear} className="clear-completed">
            Clear Completed
          </button>
        </div>
      </div>
    </footer>
  );
}

function FilterTask({ items }) {
  return (
    <div className="task-filter">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}

function ReorderTasks() {
  return (
    <div className="extra">
      <p>Drag and drop to reorder list</p>
    </div>
  );
}
