import { useEffect, useState } from "react";

function FirstTenTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>First 10 Todos</h1>

      {todos.slice(0, 10).map((todo) => (
        <p key={todo.id}>
          {todo.id} - {todo.title}
        </p>
      ))}
    </div>
  );
}

export default FirstTenTodos;
