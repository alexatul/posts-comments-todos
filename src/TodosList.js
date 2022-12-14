import "./TodosList.css";
import { useEffect, useState } from "react";

function TodosList() {
  const [todos, setTodos] = useState([]);

  const [isTodosDisplayed, setTodosDisplayed] = useState(false);

  const toggleTodos = () => {
    setTodosDisplayed(!isTodosDisplayed);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, []);

  return (
    <div className="todo-list">
      <div className="todo-list-button">
        <button onClick={toggleTodos}>Todos</button>
      </div>
      {isTodosDisplayed ? (
        <ul className="todos">
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TodosList;
