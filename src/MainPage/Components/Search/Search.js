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
  background: linear-gradient(
    rgba(5, 30, 6, 40%),
    rgba(5, 30, 6, 60%)

  );
  color: white;
  width: 100%;
  align-items: center;
  padding: 10px 10px 10px 10px;
  position: sticky;
  top: 0px;
  border-bottom: 2px solid #000;
`

 const FiltersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
        <SovereignFilter swapSovereignStates={props.swapSovereignStates}/>
      </FiltersDiv>
      <SortingSelectors changeSorting={props.changeSorting}/>
    </Div>
  )
}

export default Search;