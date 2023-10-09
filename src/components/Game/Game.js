import React from 'react';

import { checkGuesses } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import Keyboard from '../Keyboard';
import BannerHappy from '../BannerHappy';
import BannerSad from '../BannerSad';

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus]   = React.useState('running') // running || won || lost
  const [answer, setAnswer]   = React.useState(sample(WORDS))

  const handleGuessSubmnit = (guess) => {
    const nextGuesses = [...guesses, guess];

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }

    setGuesses(nextGuesses);
  }

  const letterStatuses = (guesses, answer) => {
    const statuses = {};
  
    checkGuesses(guesses, answer).forEach(guess =>  {
      guess.forEach(({ letter, status }) => {
        statuses[letter] = status;
      });
    });

    return statuses;
  }

  const statusForLetter = (letter) => letterStatuses(guesses, answer)[letter]

  const restartHandler = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setStatus('running');
  }

  return (
    <div className="game">
      { status === 'won' && <BannerHappy guessCount={guesses.length} restartHandler={restartHandler}/> }
      { status === 'lost' && <BannerSad answer={answer} restartHandler={restartHandler}/> }
      <Guesses checkedGuesses={checkGuesses(guesses, answer)} numberOfGuessesAllowed={NUM_OF_GUESSES_ALLOWED}/>
      <GuessInput handleGuessSubmnit={handleGuessSubmnit} status={status}/>
      <Keyboard statusForLetter={statusForLetter}/>
    </div>
  );
}

export default Game;
