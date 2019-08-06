import React, { useEffect, useReducer } from 'react';
import './App.scss';
import Searchbar from "./Searchbar/Searchbar";
import CountriesCardsContainer from "./CountriesCardsContainer/CountriesCardsContainer";
import getInitialData from "./GetInitialData";
import { SORTED_BY } from "./Constants.js";
import reducer from "./Reducers.js";
import actions from "./Actions.js";

function App() {
  const [state, dispatch] = useReducer(reducer, {
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
    sortedBy: SORTED_BY.ALPHABETICAL
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

  const changeSubregionFilter = (subregion) => {
    dispatch({
      type: actions.CHANGE_SUBREGION_FILTER,
      payload: subregion
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

  const changeSorting = (sortingType) => {
    dispatch({
      type: actions.CHANGE_SORTING,
      payload: sortingType
    })
    dispatch({
      type: actions.SORT
    })
  }

  useEffect(() => {
    getInitialData().then((data) => 
      dispatch({
        type: actions.SET_INITIAL_DATA,
        payload: {
          countries: data.countries,
          regionsMapping: data.regionsMapping
        }
      })
    )
  }, [dispatch])

  return (
    <div>
      <Searchbar 
        search={search}
        swapSovereignStates={swapSovereignStates}
        changeRegionFilter={changeRegionFilter}
        changeSubregionFilter={changeSubregionFilter}
        regionsMapping={state.initial.regionsMapping}
        changeSorting={changeSorting}
      />
      <CountriesCardsContainer 
        countries={
          state.search.isSearched ?
          state.search.filteredCountries : 
          state.initial.allCountries
        }
      />
    </div>
  );
}

export default App;
