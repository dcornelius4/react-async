import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map((character, i) => (
    <li key={i}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
}

Character.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
