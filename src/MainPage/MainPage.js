import React, { useEffect, useReducer } from 'react';
import getInitialData from "./Reducers/GetInitialData";
import { SORTED_BY, INITIAL_PAGE } from "../Common/Constants.js";
import reducer from "./Reducers/Reducers.js";
import actions from "./Actions/Actions.js";
import Search from "./Components/Search/Search";
import CountriesCardsContainer from "./Components/Results/Results";

function MainPage(params) {
  const initialRegion = params.location.search ? params.location.search.split('region=')[1].split('&')[0] : "";
  const initialSubregion = params.location.search && params.location.search.includes("subregion") ? 
    params.location.search.replace('%20', ' ').split('=')[2] : "";
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
      region: initialRegion,
      subregion: initialSubregion
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

  const changeQueryParameters = (newQuery) => {
    params.history.push({
      pathname: '/countrycraze',
      search: newQuery
    })
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
        filters={state.filters}
        changeQueryParameters={changeQueryParameters}
      />
      <CountriesCardsContainer 
        countries={
          state.search.filteredCountries
        }
        page={state.page}
        setPage={setPage}
      />
    </>
  )
}

export default MainPage
