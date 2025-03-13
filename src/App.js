import Header from "./Header";
import TasksDone from "./TasksDone";
import TasksToDo from "./TasksToDo";

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
