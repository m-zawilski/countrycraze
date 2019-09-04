import reducer from './Reducers';
import { useReducer } from 'react';
import * as actions from './Actions';
import { SORTED_BY, INITIAL_PAGE } from './Constants';

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
  dispatch(actions.changePage(2))
  expect(state.page).toBe(2);
})