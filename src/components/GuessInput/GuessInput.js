import React from 'react';

function GuessInput({ handleGuessSubmnit, status }) {
  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmnit(guess);
    setGuess('')
  } 

  return ( 
    <form className="guess-input-wrapper" onSubmit={event => {handleSubmit(event)}}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
        disabled={status !== 'running'}
        title="Enter a 5-letter word"
        name="guess"
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        value={guess} 
        type="text" 
        onChange={event => {setGuess(event.target.value.toUpperCase())}} />
    </form>
  )
}

export default GuessInput;
