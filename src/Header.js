import { useEffect, useRef } from "react";

function Header({ input, onSetInput, todos, onSetTodos }) {
  const task = useRef(null);

  useEffect(function () {
    function callback(e) {
      if (document.activeElement === task.current) return;

      if (e.key === "Enter") {
        task.current.focus();
      }
    }
    document.addEventListener("keypress", (e) => callback(e));
  }, []);
  function handleAddTodo() {
    if (input !== "") onSetTodos(() => [...todos, newTodo]);
    const newTodo = {
      title: input,
      id: Math.floor(Math.random() * 100000),
      done: false,
    };
    onSetInput("");
  }
  return (
    <header className="header">
      <input
        value={input}
        onChange={(e) => onSetInput(e.target.value)}
        className="input"
        placeholder="Add a new task"
        ref={task}
      ></input>
      <button onClick={() => handleAddTodo()}>+</button>
    </header>
  );
}

export default Header;
