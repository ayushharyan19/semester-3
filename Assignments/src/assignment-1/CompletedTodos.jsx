import { useEffect, useState } from "react";

function CompletedTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Completed Todos</h1>

      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <p key={todo.id}>
            {todo.id} - {todo.title}
          </p>
        ))}
    </div>
  );
}

export default CompletedTodos;
