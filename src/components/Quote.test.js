import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote Component', () => {
  it('renders the quote', () => {
    const quote = {
      character: 'Bender',
      quote: 'Oh crap!',
      image: '/image'
    };
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
