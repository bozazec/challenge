import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome = 'This is a home page, welcome';
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true)
});
