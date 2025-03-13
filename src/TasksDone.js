import Todo from "./Todo"

function TasksDone({todos}) {
    console.log(todos) 
    return (
        <div className="container">
           <p className="title">Done - X</p>
           {todos.map((todo)=> todo.done ?"": <Todo key={todo.id} done={todo.done} title={todo.title} />)}  
     
        </div>
    )
}

export default TasksDone
