import { useState } from "react";
import Header from "./Header";
import TasksDone from "./TasksDone";
import TasksToDo from "./TasksToDo";

const todo = [
  { title: "finfish the to do app", id: 3443434, done: false },
  { title: "Study for exam", id: 54093023, done: true },
];
function App() {
  const [todos, setTodos] = useState(todo);
  const [input, setInput] = useState("");
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
