import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './Searchbar';

it('renders without crashing', () => {
  expect(shallow(<Searchbar/>)).toMatchSnapshot();
});
