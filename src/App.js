import { useEffect, useState } from "react";
import Header from "./Header";
import TasksDone from "./TasksDone";
import TasksToDo from "./TasksToDo";

function App() {
  const data = JSON.parse(localStorage.getItem("todo")) || [];
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  useEffect(
    function () {
      localStorage.setItem("todo", JSON.stringify(todos));
    },
    [todos]
  );
  return (
    <div className="app">
      <Header
        input={input}
        onSetInput={setInput}
        todos={todos}
        onSetTodos={setTodos}
      />
      <TasksToDo todos={todos} onSetTodo={setTodos} />
      <TasksDone todos={todos} />
    </div>
  );
}

export default App;
