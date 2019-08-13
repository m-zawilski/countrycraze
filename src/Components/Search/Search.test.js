import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

it('renders without crashing', () => {
  expect(shallow(<Search/>)).toMatchSnapshot();
});
