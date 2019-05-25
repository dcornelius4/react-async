import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders a Characters', () => {
    const characters = [
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        image: '/image'
      },
      {
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        image: '/image'
      }
    ];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
