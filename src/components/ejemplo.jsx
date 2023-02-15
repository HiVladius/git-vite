import React, { useState } from "react";

const Ejemplo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Ejemplo;