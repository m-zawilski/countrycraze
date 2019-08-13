export const actionTypes = {
  SET_INITIAL_DATA: "SET_INITIAL_DATA",
  SWAP_SOVEREIGN_STATES_FILTER: "SWAP_SOVEREIGN_STATES_FILTER",
  CHANGE_REGION_FILTER: "CHANGE_REGION_FILTER",
  CHANGE_SUBREGION_FILTER: "CHANGE_SUBREGION_FILTER",
  SEARCH: "SEARCH",
  CHANGE_SORTING: "CHANGE_SORTING",
  SORT: "SORT"
}

const swapSovereignStatesFilter = () => {
  return {
    type: actionTypes.SWAP_SOVEREIGN_STATES_FILTER
  }
}

const search = (query) => {
  return {
    type: actionTypes.SEARCH,
    payload: query
  }
}

const changeRegionFilter = (region) => {
  return {
    type: actionTypes.CHANGE_REGION_FILTER,
    payload: region
  }
}

const changeSubregionFilter = (subregion) => {
  return {
    type: actionTypes.CHANGE_SUBREGION_FILTER,
    payload: subregion
  }
}

const changeSortingType = (sortingType) => {
  return {
    type: actionTypes.CHANGE_SORTING,
    payload: sortingType
  }
}

const sort = () => {
  return {
    type: actionTypes.SORT
  }
}

const setInitialData = (data) => {
  return {
    type: actionTypes.SET_INITIAL_DATA,
    payload: {
      countries: data.countries,
      regionsMapping: data.regionsMapping
    }
  }
}

export default {
  setInitialData,
  search,
  swapSovereignStatesFilter,
  changeRegionFilter,
  changeSubregionFilter,
  changeSortingType,
  sort
}