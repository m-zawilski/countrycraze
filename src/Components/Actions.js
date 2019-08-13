export const actionTypes = {
  SET_INITIAL_DATA: "SET_INITIAL_DATA",
  SWAP_SOVEREIGN_STATES_FILTER: "SWAP_SOVEREIGN_STATES_FILTER",
  CHANGE_REGION_FILTER: "CHANGE_REGION_FILTER",
  CHANGE_SUBREGION_FILTER: "CHANGE_SUBREGION_FILTER",
  SEARCH: "SEARCH",
  CHANGE_SORTING: "CHANGE_SORTING",
  SORT: "SORT"
}

const changeRegionFilter = (region) => {
  return {
    type: actionTypes.CHANGE_REGION_FILTER,
    payload: region
  }
}

const changeSortingType = (sortingType) => {
  return {
    type: actionTypes.CHANGE_SORTING,
    payload: sortingType
  }
}

const changeSubregionFilter = (subregion) => {
  return {
    type: actionTypes.CHANGE_SUBREGION_FILTER,
    payload: subregion
  }
}

const search = (query) => {
  return {
    type: actionTypes.SEARCH,
    payload: query
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

const sort = () => {
  return {
    type: actionTypes.SORT
  }
}

const swapSovereignStatesFilter = () => {
  return {
    type: actionTypes.SWAP_SOVEREIGN_STATES_FILTER
  }
}

export default {
  changeRegionFilter,
  changeSortingType,
  changeSubregionFilter,
  setInitialData,
  search,
  sort,
  swapSovereignStatesFilter,
}