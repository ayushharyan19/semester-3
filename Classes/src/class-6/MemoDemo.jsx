import React, { useState, useMemo } from "react";
import Child from "./Child";

const MemoDemo = () => {
  let [count, setCount] = useState(0);
  let data = useMemo(() => {
    let res = 1;
    for (let i = 0; i < 1000000000; i++) {
      res++;
    }
    return res;
  }, []);

  return (
    <div>
      <h3>res:{data}</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>add</button>
      <Child />
    </div>
  );
};

export default MemoDemo;
