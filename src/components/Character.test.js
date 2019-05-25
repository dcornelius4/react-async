import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a Character', () => {
    const character = {
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: '/image'
    };
    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
