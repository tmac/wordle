import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';

function Guesses({ checkedGuesses, numberOfGuessesAllowed }) {

  const guessList = range(numberOfGuessesAllowed).map((index) => {
    return (
      <Guess checkedGuess={checkedGuesses[index]} key={crypto.randomUUID()} />
    )
  })

  return (
    <div className="guess-results">
      {guessList}
    </div>
  )
}

export default Guesses;
