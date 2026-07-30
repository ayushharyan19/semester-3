import { useEffect, useState } from "react";

function SearchAndDelete() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search & Delete Todo</h1>

      <input
        type="text"
        placeholder="Search Todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredTodos.map((todo) => (
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

export default SearchAndDelete;
