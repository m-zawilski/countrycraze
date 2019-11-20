import React, { useState } from "react";
import RegionSelector from "./Selectors/RegionSelector";
import SubregionSelector from "./Selectors/SubregionSelector";
import SortingSelectors from "./Selectors/SortingSelector";
import SovereignFilter from "./SovereignFilter/SovereignFilter";
import Searchbar from "./Searchbar/Searchbar";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    rgba(0, 0, 0, 80%),
    rgba(0, 0, 0, 70%)
  );
  z-index: 100;
  color: white;
  width: 100%;
  align-items: center;
  padding: 10px 10px 10px 10px;
  position: sticky;
  top: 0px;
`

 const FiltersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 `

function Search(props) {
  const [ subregions, setSubregions ] = useState([""]);
  const [ selectedSubregion, setSelectedSubregion ] = useState(props.filters.subregion);
  return (
    <Div>
      <Searchbar search={props.search}/>
      <FiltersDiv>
        <RegionSelector
          regionsMapping={props.regionsMapping}
          setSubregions={setSubregions}
          setSelectedSubregion={setSelectedSubregion}
          changeRegionFilter={props.changeRegionFilter}
          changeSubregionFilter={props.changeSubregionFilter}
          selectedRegion={props.filters.region}
          selectedSubregion={selectedSubregion}
          changeQueryParameters={props.changeQueryParameters}
        />
        <SubregionSelector
          selectedSubregion={selectedSubregion}
          setSelectedSubregion={setSelectedSubregion}
          changeSubregionFilter={props.changeSubregionFilter}
          subregions={subregions}
          selectedRegion={props.filters.region}
          changeQueryParameters={props.changeQueryParameters}
        />
        <SortingSelectors 
          changeSorting={props.changeSorting}
        />
        <SovereignFilter swapSovereignStates={props.swapSovereignStates}/>
      </FiltersDiv>
    </Div>
  )
}

export default Search;