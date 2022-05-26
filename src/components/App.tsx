import { useState } from "react";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
  );
}

export default App;
