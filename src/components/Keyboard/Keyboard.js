import React from 'react';
import { letters } from '../../data'; 

function Key ({ letter, status }) {
  return (
    <span className={`key ${status}`}>
      {letter}
    </span>
  )
}

function Keyboard({ statusForLetter }) {

  return <div className='keyboard'>
    { 
      letters.map(letter => {
        return <Key key={crypto.randomUUID()} letter={letter} status={statusForLetter(letter)}/>
      })
    }
  </div>;
}

export default Keyboard;
