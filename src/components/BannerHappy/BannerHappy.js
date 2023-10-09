import React from 'react';
import Banner from '../Banner';

function BannerHappy({ guessCount, restartHandler }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> { guessCount == 1 ? '1 guess' : `${guessCount} guesses` }</strong>.
      </p>
      <button onClick={restartHandler}>Play Again!</button>
    </Banner>
  );
}

export default BannerHappy;
