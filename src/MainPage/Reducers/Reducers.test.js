import reducer from './Reducers';
import { useReducer } from 'react';
import * as actions from '../Actions/Actions';
import { SORTED_BY, INITIAL_PAGE } from '../../Common/Constants';

const mockState = {
  initial: {
    allCountries: [],
    regionsMapping: {}
  },
  search: {
    filteredCountries: [],
    currentQuery: "",
    isSearched: false,
  },
  filters: {
    sovereignStates: false,
    region: "",
    subregion: ""
  },
  sortedBy: SORTED_BY.ALPHABETICAL,
  page: INITIAL_PAGE
};

test('test', () => {
  expect(2).toBe(2);
})