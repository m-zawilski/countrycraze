import React, { useState } from "react";
import RegionSelector from "./RegionSelector/RegionSelector";
import SubregionSelector from "./SubregionSelector/SubregionSelector";
import SortingSelectors from "./SortingSelectors/SortingSelectors";
import SovereignFilter from "./SovereignFilter/SovereignFilter";
import Searchbar from "./Searchbar/Searchbar";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background: lightblue;
  width: 100%;
  align-items: center;
  padding: 10px 10px 10px 10px;
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #000;
`

 const FiltersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 `

function Search(props) {
  const [ subregions, setSubregions ] = useState([""]);
  const [ selectedSubregion, setSelectedSubregion ] = useState("");
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
        />
        <SubregionSelector
          selectedSubregion={selectedSubregion}
          setSelectedSubregion={setSelectedSubregion}
          changeSubregionFilter={props.changeSubregionFilter}
          subregions={subregions}
        />
        <SovereignFilter swapSovereignStates={props.swapSovereignStates}/>
      </FiltersDiv>
      <SortingSelectors changeSorting={props.changeSorting}/>
    </Div>
  )
}

export default Search;