import React from 'react';
import Banner from '../Banner';

function BannerSad({ answer, restartHandler }) {
  return (
    <Banner status="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button onClick={restartHandler}>Play Again!</button>
    </Banner>
  )
}

export default BannerSad;
