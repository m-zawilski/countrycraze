import { SORTED_BY } from "./Constants.js";
import actions from "./Actions";
    
const reducer = (state, action) => {
  return {
    initial: initialReducer(state, action),
    search: filteredCountriesReducer(state, action), 
    filters: {
      sovereignStates: sovereignStateFilterReducer(state, action),
      region: regionFilterReducer(state, action),
      subregion: subregionFilterReducer(state, action)
    }
  }
}

const initialReducer = (state, action) => {
  switch (action.type){
    case actions.SET_INITIAL_DATA:
      return {
        allCountries: action.payload.countries,
        regionsMapping: action.payload.regionsMapping
      }
    default:
      return {
        ...state.initial
      }
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

const subregionFilterReducer = (state, action) => {
  switch(action.type){
    case actions.CHANGE_SUBREGION_FILTER:
      return action.payload;
    default:
      return state.filters.subregion;
  }
}

const search = (state, currentQuery = "") => {
  if((currentQuery !== "") || isAnyFilterTrue(state.filters)){
    return {
      currentQuery: currentQuery,
      filteredCountries: filter(state.initial.allCountries, currentQuery, state.filters),
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
    if(filters.region === ""){
      return true;
    } else {
      return country.region.toUpperCase() === filters.region.toUpperCase();
    }
  }).filter((country) => {
    if(filters.subregion === ""){
      return true;
    } else {
      return country.subregion.toUpperCase() === filters.subregion.toUpperCase();
    }
  });
}

export default reducer;