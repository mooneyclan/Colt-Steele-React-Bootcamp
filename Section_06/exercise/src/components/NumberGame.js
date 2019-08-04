import React, { useState } from "react";

export function NumberGame() {
  const [num, setNum] = useState(0);

  function getNum() {
    let rand = Math.ceil(Math.random() * 10);
    return setNum(rand);
  }

  return (
    <div>
      <h1>Number is: {num}</h1>
      {num === 7? 
      <h1>Winner!!!</h1> : 
      <button onClick={getNum}>Random Number</button>  
      }
    </div>
  );
}