import React, { useState, useEffect } from "react";

const MyFunc = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`OOPS!!`);
    document.title = `You Clicked ${count} times`;
  }, [count]); //executes after every render

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Hello Mr. {name}</p>
    </div>
  );
};

export default MyFunc;
