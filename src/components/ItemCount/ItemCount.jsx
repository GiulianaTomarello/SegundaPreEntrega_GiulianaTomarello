import React, { useState } from "react";


function ItemCount({ stock }) {
  const [count, setCount] = useState(1);

  function handleAdd(evt) {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract(evt) {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <button conClick={handleSubstract}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="itemcount_btns">
        {/* 3. agregar un onClick con el evento recibido por Props */}
        <button>
          agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;