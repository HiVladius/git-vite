import React, { useState } from "react";

const Ejemplo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>¿Conoces las buenas practicas de la traducción? {count}</p>
      <button onClick={() => setCount(count + 1)}>Si</button>
      <button onClick={() => setCount(count + 1)}>No</button> 
    </div>
  );
}

export default Ejemplo;