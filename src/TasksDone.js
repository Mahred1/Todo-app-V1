import Todo from "./Todo"

function TasksDone({todos,onSetTodo}) {
   const numCompleted= todos.filter(todo=>todo.done===true).length;
    return (
        <div className="container">
           <p className="title">Done - {numCompleted}</p>
           {todos.map((todo)=> todo.done ?<Todo key={todo.id} done={todo.done} title={todo.title} todos={todos} id={todo.id} onSetTodo={onSetTodo} />:"")}  
     
        </div>
    )
}

export default TasksDone
