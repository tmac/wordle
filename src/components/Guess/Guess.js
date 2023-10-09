import React from 'react';
import { range } from '../../utils';

function Guess({ checkedGuess }) {
  const cells = range(5).map((index) => {
    return (
      <span key={crypto.randomUUID()} className={`cell ${checkedGuess?.[index].status ?? ''}`}>
        {checkedGuess?.[index].letter}
      </span>
    );
  });
  
  return (
    <p className="guess">
      { cells }
    </p>
  );

}

export default Guess;
