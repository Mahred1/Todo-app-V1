import Header from "./Header";
import TasksDone from "./TasksDone";
import TasksToDo from "./TasksToDo";

const todo = [
  { title: "finfish the to do app", id: 3443434, done: false },
  { title: "Study for exam", id: 54093023, done: false },
];
function App() {
  return (
    <div className="app">
      <Header />
      <TasksToDo />
      <TasksDone />
    </div>
  );
}

export default App;
