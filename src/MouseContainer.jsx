import React, { useState, useEffect } from "react";
import HooksMouse from "./HooksMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Click</button>
      {display && <HooksMouse />}
    </div>
  );
};
export default MouseContainer;
