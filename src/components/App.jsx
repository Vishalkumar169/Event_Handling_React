import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
