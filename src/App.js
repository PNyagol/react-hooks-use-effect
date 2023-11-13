import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("useEffect called");
    document.title = text;
  }, [text]);
  useEffect(() => {
    console.log("useEffect for resetting count");
    const timeoutId = setTimeout(() => setCount(0), 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
