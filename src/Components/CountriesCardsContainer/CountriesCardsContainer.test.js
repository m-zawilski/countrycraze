import React from 'react';
import { shallow } from 'enzyme';
import CountriesCardsContainer from './CountriesCardsContainer';

it('renders without crashing', () => {
  expect(shallow(<CountriesCardsContainer
    countries={[]}
  />)).toMatchSnapshot();
});
