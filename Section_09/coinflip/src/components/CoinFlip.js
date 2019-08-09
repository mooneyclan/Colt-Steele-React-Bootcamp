import React, { useState } from "react";


export function CoinFlip() {
  const [nHeads, setNHeads] = useState(0);
  const [nTails, setNTails] = useState(0);
  const [currCoin, setCurrCoin] = useState(null);
  const [nFlips, setNFlips] = useState(0);

  CoinFlip.defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  };

  function handleClick(e) {
    flipCoin();
  }

  function flipCoin() {
    let randomIndex = Math.floor(Math.random() * 2);
    let choice = this.props.coins[randomIndex];
    // Colt is doing Class syntax, I couldn't convert to functionaL syntax
  }

  return (
    <div>
      <h1>Let's flip a coin!</h1>
      <img src={currCoin} alt="dime"></img>
      <button onClick={handleClick}>Flip the coin</button>  
      <p>Out of {nFlips}, there have been {nHeads} heads and {nTails} tails.</p>
    </div>
  );
}