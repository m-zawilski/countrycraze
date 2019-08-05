import { SORTED_BY, REGION } from "./Constants.js";
import actions from "./Actions";
    
const reducer = (state, action) => {
  return {
    allCountries: allCountriesReducer(state, action),
    search: filteredCountriesReducer(state, action), 
    filters: {
      sovereignStates: sovereignStateFilterReducer(state, action),
      region: regionFilterReducer(state, action)
    }
  }
}

const allCountriesReducer = (state, action) => {
  switch (action.type){
    case actions.SET_ALL_COUNTRIES:
      return action.payload;
    default:
      return state.allCountries;
  }
}

const filteredCountriesReducer = (state, action) => {
  switch(action.type){
    case actions.SEARCH:
      return search(state, action.payload);
    default:
      return {
        currentQuery: state.search.currentQuery,
        filteredCountries: state.search.filteredCountries,
        isSearched: false
      };
  }
}

const sovereignStateFilterReducer = (state, action) => {
  switch(action.type){
    case actions.SWAP_SOVEREIGN_STATES_FILTER:
      return !state.filters.sovereignStates
    default:
      return state.filters.sovereignStates
  }
}

const regionFilterReducer = (state, action) => {
  switch(action.type){
    case actions.CHANGE_REGION_FILTER:
      return action.payload;
    default:
      return state.filters.region;
  }
}

const search = (state, currentQuery = "") => {
  if((currentQuery !== "") || isAnyFilterTrue(state.filters)){
    return {
      currentQuery: currentQuery,
      filteredCountries: filter(state.allCountries, currentQuery, state.filters),
      isSearched: true
    }
  } 
  return {
    currentQuery: state.search.currentQuery,
    filteredCountries: state.search.filteredCountries,
    isSearched: false
  };
}

const isAnyFilterTrue = (filters) => {
  return Object.values(filters).reduce((acc, filter) => {
    if (filter){
      return true;
    }
    return acc;
  }, false)
}

const filter = (allCountries, query = "", filters = {}, sortedBy = SORTED_BY.ALPHABETICAL) => {
  return allCountries.filter((country) => {
    return country.name.toUpperCase().includes(query.toUpperCase());
  }).filter((country) => {
    if (filters.sovereignStates) {
      return country.sovereign;
    } else return true;
  }).filter((country) => {
    if(filters.region === REGION.NONE){
      return true;
    } else {
      return country.region.toUpperCase() === filters.region;
    }
  });
}

export default reducer;