import { useEffect, useState } from "react";

function DeleteTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Delete Todo</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            {todo.id} - {todo.title}
          </p>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default DeleteTodo;
