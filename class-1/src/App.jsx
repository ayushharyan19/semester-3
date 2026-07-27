import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("red");

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setBgColor(bgColor === "red" ? "gold" : "red")}>
        Change Background
      </button>
    </div>
  );
};

export default App;
