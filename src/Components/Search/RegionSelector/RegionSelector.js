import React from 'react'
import styled from "styled-components";

const RegionSelect = styled.select`
  width: 80px;
  text-align-last: center;
  margin: 3px;
  cursor: pointer;
`

const RegionSelector = (props) => {
  return (
    <RegionSelect onChange={(e) => {
      let subregion = props.regionsMapping[e.target.value]["subregion"].sort();
      if(e.target.value !== "" && 
        props.regionsMapping[e.target.value]["subregion"].length > 1){
        props.setSubregions(["", ...subregion]);
      } else {
        props.setSubregions([""]);
      }
      props.setSelectedSubregion("");
      props.changeRegionFilter(e.target.value)
      props.changeSubregionFilter("")
    }}>
      {Object.keys(props.regionsMapping).sort().map((region, i) => {
        return <option 
          value={region}
          key={i}
        >{region ? region : "(Region)"}</option>
      })}
    </RegionSelect>
  )
}

export default RegionSelector
