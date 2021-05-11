import React, { useState, useEffect } from "react";

const IntervalHook = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(0)}>Click to Start</button>
    </div>
  );
};

export default IntervalHook;
