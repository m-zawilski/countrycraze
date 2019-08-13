import React, { useState } from "react";
import RegionSelector from "./RegionSelector/RegionSelector";
import SubregionSelector from "./SubregionSelector/SubregionSelector";
import SortingSelectors from "./SortingSelectors/SortingSelectors";
import SovereignFilter from "./SovereignFilter/SovereignFilter";
import Searchbar from "./Searchbar/Searchbar";
import styled from "styled-components";

const SearchContainer = styled.div`
  background: white;
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 10px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #000;
`

function Search(props) {
  const [ subregions, setSubregions ] = useState([""]);
  const [ selectedSubregion, setSelectedSubregion ] = useState("");
  return (
    <SearchContainer>
      <Searchbar search={props.search}/>
      <RegionSelector
        regionsMapping={props.regionsMapping}
        setSubregions={setSubregions}
        setSelectedSubregion={setSelectedSubregion}
        changeRegionFilter={props.changeRegionFilter}
        changeSubregionFilter={props.changeSubregionFilter}
      />
      <SubregionSelector
        selectedSubregion={selectedSubregion}
        setSelectedSubregion={setSelectedSubregion}
        changeSubregionFilter={props.changeSubregionFilter}
        subregions={subregions}
      />
      <SovereignFilter swapSovereignStates={props.swapSovereignStates}/>
      <SortingSelectors changeSorting={props.changeSorting}/>
    </SearchContainer>
  )
}

export default Search;