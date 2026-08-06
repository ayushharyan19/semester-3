import React, { useState } from "react";

const ColorChanger = () => {
  // State for background color
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        padding: "60px",
      }}
    >
      <h1>Color Changer</h1>
      <h3>Current Color : {color}</h3>
      <button onClick={() => setColor("Red")}>Red</button>
      <button onClick={()=>setColor("lightblue")}>Blue</button>
      <button onClick={()=>setColor("yellow")}>Yellow</button>
    </div>
  );
};

export default ColorChanger;
