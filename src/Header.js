function Header({ input, onSetInput,todos,onSetTodos }) {
  function handleAddTodo() {

    onSetTodos(()=>[...todos,newTodo])
    const newTodo = {
      title: input,
      id: Math.floor(Math.random() * 100000),
      done: false,
    };
   
  }
  return (
    <header className="header">
      <input
        onChange={(e) => onSetInput(e.target.value)}
        className="input"
        placeholder="Add a new task"
      ></input>
      <button onClick={() => handleAddTodo()}>+</button>
    </header>
  );
}

export default Header;
