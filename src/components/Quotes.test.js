import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes Component', () => {
  it('renders the quotes', () => {
    const quotes = [
      {
        character: 'Blender',
        quote: 'Oh crap!',
        image: '/image'
      },
      {
        character: 'Blender',
        quote: 'Where is the beer?',
        image: '/image'
      }
    ];
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
