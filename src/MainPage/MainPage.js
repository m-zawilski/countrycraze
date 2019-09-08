import React, { useEffect, useReducer } from 'react';
import getInitialData from "./Reducers/GetInitialData";
import { SORTED_BY, INITIAL_PAGE } from "../Common/Constants.js";
import reducer from "./Reducers/Reducers.js";
import actions from "./Actions/Actions.js";
import Search from "./Components/Search/Search";
import CountriesCardsContainer from "./Components/Results/Results";

function MainPage() {
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
    sortedBy: SORTED_BY.ALPHABETICAL,
    page: INITIAL_PAGE
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

  const setPage = (number) => {
    dispatch(actions.changePage(number))
  }

  useEffect(() => {
    getInitialData().then((data) => 
      dispatch(actions.setInitialData(data))
    ).catch((error) => {
      console.log(error);
      return <p>There was an error while downloading the data.</p>
    })
  }, [dispatch])
  
  if(!state.initial.regionsMapping || !Object.keys(state.initial.regionsMapping).length){
    return <p>Loading...</p>;
  }

  return (
    <>
      <Search 
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
        page={state.page}
        setPage={setPage}
      />
    </>
  )
}

export default MainPage
