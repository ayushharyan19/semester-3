import { useEffect, useState } from "react";

function FilterByUser() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setFiltered(data);
      });
  }, []);

  function filterUser(id) {
    setFiltered(todos.filter((todo) => todo.userId === id));
  }

  return (
    <div>
      <h1>Filter by User</h1>

      <button onClick={() => filterUser(1)}>User 1</button>
      <button onClick={() => filterUser(2)}>User 2</button>
      <button onClick={() => filterUser(3)}>User 3</button>
      <button onClick={() => setFiltered(todos)}>All</button>

      {filtered.map((todo) => (
        <p key={todo.id}>
          {todo.id} - {todo.title}
        </p>
      ))}
    </div>
  );
}

export default FilterByUser;
