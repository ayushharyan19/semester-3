import React, { useEffect, useState } from 'react'

const App = () => {
  let[count, setCount] = useState(0);
  let[city, setCity] = useState("Delhi");
  let[user,setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h1>{user.title}</h1>
      <h1>{count}</h1>
      <h1>{city}</h1>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setCity("Goa")}>Change</button>
    </div>
  )
}

export default App