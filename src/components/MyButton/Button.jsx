import "./Button.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.color);

  function handleClick() {
    setColorBtn("red");
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: colorBtn}}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;