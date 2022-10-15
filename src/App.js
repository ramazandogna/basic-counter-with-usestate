import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("This message sending from useState");
  return (
    <div className="App">
      <h1>Hello World 🤟🏻</h1>
      <p>
        It's my first React project to long time later 👈🏻 <br /> and im planning
        to make a time counter app ⏱ <br />
        <br /> lets do this 😉
      </p>
      <h4>Count: {count}</h4>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <div>
          <p>Message: {message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
