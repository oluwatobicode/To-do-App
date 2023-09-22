import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

const initalTodo = [
  {
    id: 1,
    description: "Complete online javascript course",
    completed: false,
  },
  {
    id: 2,
    description: "Jog around the park",
    completed: false,
  },
  {
    id: 3,
    description: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    description: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    description: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    description: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];
