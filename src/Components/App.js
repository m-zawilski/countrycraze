import React, { useEffect, useReducer } from 'react';
import './App.scss';
import Searchbar from "./Searchbar/Searchbar";
import CountriesCardsContainer from "./CountriesCardsContainer/CountriesCardsContainer";
import getInitialData from "./GetInitialData";
import { SORTED_BY } from "./Constants.js";
import reducer from "./Reducers.js";
import actions from "./Actions.js";
import styled from "styled-components";
import 'typeface-roboto';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;

  * {
    box-sizing: border-box;
  }
`

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
    dispatch(actions.swapSovereignStatesFilter());
    dispatch(actions.search(state.search.currentQuery));
  }

  const changeRegionFilter = (region) => {
    dispatch(actions.changeRegionFilter(region));
    dispatch(actions.search(state.search.currentQuery));
  }

  const changeSubregionFilter = (subregion) => {
    dispatch(actions.changeSubregionFilter(subregion));
    dispatch(actions.search(state.search.currentQuery));
  }

  const search = (query) => {
    dispatch(actions.search(query));
  }

  const changeSorting = (sortingType) => {
    dispatch(actions.changeSortingType(sortingType))
    dispatch(actions.sort())
  }

  useEffect(() => {
    getInitialData().then((data) => 
      dispatch(actions.setInitialData(data))
    )
  }, [dispatch])
  
  if(!state.initial.regionsMapping || !Object.keys(state.initial.regionsMapping).length){
    return <p>Loading...</p>;
  }

  return (
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
