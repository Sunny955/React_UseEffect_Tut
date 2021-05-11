import React, { useState, useEffect } from "react";

const HooksMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const givemouseposition = (e) => {
    console.log(`function is called`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect Called!!");
    window.addEventListener("mousemove", givemouseposition);

    return () => {
      console.log("Unmounting Code!!");
      window.removeEventListener("mousemove", givemouseposition);
    }; // we did this because in case if we aren't rendering this component in our app.js then it will gives warning about memory leak
  }, []);
  return (
    <div>
      Mouse Position is: {x}:{y}
    </div>
  );
};
export default HooksMouse;
