import Todo from "./Todo";

function TasksToDo({ todos }) {
  return (
    <div className="container">
      <p className="title">Tasks to do - X</p>
      {todos.map((todo)=> todo.done ?  <Todo key={todo.id} done={todo.done} title={todo.title} />:'')}  
    </div>
  );
}

export default TasksToDo;
