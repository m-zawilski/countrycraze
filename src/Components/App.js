import React, { useState, useReducer } from 'react';
import './App.scss';
import Searchbar from "./Searchbar/Searchbar";
import CountriesCardsContainer from "./CountriesCardsContainer/CountriesCardsContainer";
import { useGetCountries } from "./AppHooks";
import { SORTED_BY, REGION } from "./Constants.js";

function App() {
  const allCountries = useGetCountries();
  const [ currentQuery, setCurrentQuery ] = useState("");
  const [ filters, setFilters ] = useState({
    sovereignStatesFilter: false,
    region: REGION.NONE
  });



  const filteredCountriesReducer = (state) => {
    function isAnyFilterTrue(filters) {
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
        if (filters.sovereignStatesFilter) {
          return country.sovereign;
        } else return true;
      }).filter((country) => {
        if(filters.region === REGION.NONE){
          return true
        } else {
          return country.region.toUpperCase() === filters.region;
        }
      });
    }

    if ((currentQuery !== "") || isAnyFilterTrue(filters)){
      return { 
        "isSearched": true,
        "filteredCountries": filter(allCountries, currentQuery, filters) 
      };
    } else {
      return {
        "isSearched": false,
        "filteredCountries": allCountries 
      }
    }
  }

  const [state, dispatchFilteredCountries] = useReducer(filteredCountriesReducer, {
    "filteredCountries": allCountries,
    "isSearched": false
  });

  const swapSovereignStatesFilter = () => {
    setFilters(Object.assign({}, filters, {sovereignStatesFilter: !filters.sovereignStatesFilter}));
    dispatchFilteredCountries();
  }

  const changeRegionFilter = (region) => {
    if(region === "NONE") {
      setFilters(Object.assign({}, filters, {region: REGION.NONE}));
    } else {
      setFilters(Object.assign({}, filters, {region: region}));
    }
    dispatchFilteredCountries();
  }

  const search = (query) => {
    setCurrentQuery(query);
    dispatchFilteredCountries();
  }

  return (
    <div>
      <Searchbar 
        search={search}
        swapSovereignStatesFilter={swapSovereignStatesFilter}
        changeRegionFilter={changeRegionFilter}
      />
      <CountriesCardsContainer 
        countries={state.isSearched ? state.filteredCountries : allCountries}
      />
    </div>
  );
}

export default App;
