import React, { useState } from 'react';
import CharacterQuotes from '../containers/CharacterQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('character');

  return (
    <>
    <button onClick={() => updateQuotes('character')}>Character Quotes</button>
    {quotes === 'character' && <CharacterQuotes />}
    </>
  );
}
