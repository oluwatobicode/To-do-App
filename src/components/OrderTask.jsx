export default function OrderTask({ items, onHandleClear }) {
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
