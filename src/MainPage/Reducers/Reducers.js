import { SORTED_BY, INITIAL_PAGE } from "../../Common/Constants";
import { actionTypes } from "../Actions/Actions";
    
const reducer = (state, action) => {
  return {
    initial: initialReducer(state, action),
    search: filteredCountriesReducer(state, action), 
    filters: {
      sovereignStates: sovereignStateFilterReducer(state, action),
      region: regionFilterReducer(state, action),
      subregion: subregionFilterReducer(state, action)
    },
    sortBy: sortByReducer(state, action),
    page: pageReducer(state, action)
  }
}

const sortByReducer = (state, action) => {
  switch(action.type){
    case actionTypes.CHANGE_SORTING:
      return action.payload;
    default:
      return state.sortBy;
  }
}

const initialReducer = (state, action) => {
  switch (action.type){
    case actionTypes.SET_INITIAL_DATA:
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
    case actionTypes.SET_INITIAL_DATA:
      return {
        currentQuery: "",
        filteredCountries: action.payload.countries,
        isSearched: false
      }
    case actionTypes.SEARCH:
      return search(state, action.payload);
    case actionTypes.SORT:
      return {
        currentQuery: state.search.currentQuery,
        filteredCountries: sortCountries(state.search.filteredCountries, state.sortBy),
        isSearched: state.search.isSearched
      }
    default:
      return state.search;
  }
}

const sovereignStateFilterReducer = (state, action) => {
  switch(action.type){
    case actionTypes.SWAP_SOVEREIGN_STATES_FILTER:
      return !state.filters.sovereignStates
    default:
      return state.filters.sovereignStates
  }
}

const regionFilterReducer = (state, action) => {
  switch(action.type){
    case actionTypes.CHANGE_REGION_FILTER:
      return action.payload;
    default:
      return state.filters.region;
  }
}

const subregionFilterReducer = (state, action) => {
  switch(action.type){
    case actionTypes.CHANGE_SUBREGION_FILTER:
      return action.payload;
    default:
      return state.filters.subregion;
  }
}

const pageReducer = (state, action) => {
  switch(action.type){
    case actionTypes.CHANGE_PAGE:
      return action.payload;
    case actionTypes.SEARCH:
      return INITIAL_PAGE;
    default: 
      return INITIAL_PAGE;
  }
}

const sortCountries = (countries, sortBy) => {
  switch(sortBy){
    case SORTED_BY.ALPHABETICAL:
      return sortAlphabetical(countries);
    case SORTED_BY.REVERSED_ALPHABETICAL:
      return countries.sort((c1, c2) => {
        return c2.name.localeCompare(c1.name);
      });
    case SORTED_BY.LARGEST_POPULATION:
      return sortAlphabetical(countries).sort((c1, c2) => {
        return c2.population - c1.population;
      });
    case SORTED_BY.SMALLEST_POPULATION:
      return sortAlphabetical(countries).sort((c1, c2) => {
        return c1.population - c2.population;
      });
    case SORTED_BY.LARGEST_AREA:
      return sortAlphabetical(countries).sort((c1, c2) => {
        return c2.area - c1.area;
      });
    case SORTED_BY.SMALLEST_AREA:
      return sortAlphabetical(countries).sort((c1, c2) => {
        return c1.area - c2.area;
      });
    default:
      return countries;
  }
}

const sortAlphabetical = (countries) => {
  return countries.sort((c1, c2) => {
    return c1.name.localeCompare(c2.name);
  });
}

const search = (state, currentQuery = "") => {
  if((currentQuery !== "") || isAnyFilterTrue(state.filters)){
    let filteredCountries = filter(state.initial.allCountries, currentQuery, state.filters);
    filteredCountries = sortCountries(filteredCountries, state.sortBy);
    return {
      currentQuery: currentQuery,
      filteredCountries: filteredCountries,
      isSearched: true
    }
  } 
  return {
    currentQuery: currentQuery,
    filteredCountries: state.initial.allCountries,
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

const filter = (allCountries, query = "", filters = {}) => {
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