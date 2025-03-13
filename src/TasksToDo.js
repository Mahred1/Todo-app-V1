import Todo from "./Todo";

function TasksToDo({ todos ,onSetTodo }) {
  return (
    <div className="container">
      <p className="title">Tasks to do - X</p>
      {todos.map((todo) =>
        todo.done ? (
          ""
        ) : (
          <Todo key={todo.id} title={todo.title} done={todo.done} id={todo.id} todos={todos} onSetTodo={onSetTodo} />  
        )
      )}
    </div>
  );
}

export default TasksToDo;
