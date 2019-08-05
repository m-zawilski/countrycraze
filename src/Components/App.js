import React, { useEffect, useReducer } from 'react';
import './App.scss';
import Searchbar from "./Searchbar/Searchbar";
import CountriesCardsContainer from "./CountriesCardsContainer/CountriesCardsContainer";
import { getCountries } from "./AppHooks";
import { SORTED_BY, REGION } from "./Constants.js";
import reducer from "./Reducers.js";
import actions from "./Actions.js";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    allCountries: [],
    search: {
      filteredCountries: [],
      currentQuery: "",
      isSearched: false,
    },
    filters: {
      sovereignStates: false,
      region: REGION.NONE
    }
  });

  const swapSovereignStates = () => {
    dispatch({
      type: actions.SWAP_SOVEREIGN_STATES_FILTER
    });
    dispatch({
      type: actions.SEARCH,
      payload: state.search.currentQuery
    });
  }

  const changeRegionFilter = (region) => {
    dispatch({
      type: actions.CHANGE_REGION_FILTER,
      payload: region
    });
    dispatch({
      type: actions.SEARCH,
      payload: state.search.currentQuery
    });
  }

  const search = (query) => {
    dispatch({
      type: actions.SEARCH,
      payload: query
    });
  }

  useEffect(() => {
    getCountries().then((data) => 
      dispatch({
        type: actions.SET_ALL_COUNTRIES,
        payload: data
      })
    )
  }, [dispatch])

  return (
    <div>
      <Searchbar 
        search={search}
        swapSovereignStates={swapSovereignStates}
        changeRegionFilter={changeRegionFilter}
      />
      <CountriesCardsContainer 
        countries={state.search.isSearched ? state.search.filteredCountries : state.allCountries}
      />
    </div>
  );
}

export default App;
