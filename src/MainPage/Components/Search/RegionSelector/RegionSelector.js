import React, { useEffect } from 'react'
import styled from "styled-components";

const RegionSelect = styled.select`
  width: 80px;
  text-align-last: center;
  margin: 3px;
  cursor: pointer;
  background: white;
`

const RegionSelector = (props) => {
  const region = findRegion(props.regionsMapping, props.selectedSubregion);
  const defaultRegion = props.selectedRegion ? props.selectedRegion 
  : props.selectedSubregion ? region
  : "";
  const defaultSubregions = props.regionsMapping[defaultRegion]["subregion"].sort();

  useEffect(() => {
    if(defaultSubregions.length > 1){
      props.setSubregions(["", ...defaultSubregions])
    } else {
      props.setSubregions([""])
    }
  }, [defaultSubregions, props.setSubregions])

  return (
    <RegionSelect 
      defaultValue={defaultRegion}
      onChange={(e) => {
        let subregions = props.regionsMapping[e.target.value]["subregion"].sort();
        if(e.target.value !== "" && 
          props.regionsMapping[e.target.value]["subregion"].length > 1){
          props.setSubregions(["", ...subregions]);
        } else {
          props.setSubregions([...subregions]);
        }
        props.setSelectedSubregion("");
        props.changeRegionFilter(e.target.value)
        props.changeSubregionFilter("")
        props.changeQueryParameters(e.target.value ? `region=${e.target.value}` : '')
      }
    }>
      {Object.keys(props.regionsMapping).sort().map((region, i) => {
        return <option 
          value={region}
          key={i}
        >{region ? region : "(Region)"}</option>
      })}
    </RegionSelect>
  )
}

const findRegion = (regionsMapping, selectedSubregion) => {
  for(let region in regionsMapping) {
    for(let subregion of regionsMapping[region]["subregion"]){
      if(subregion === selectedSubregion){
        return region;
      }
    }
  }
  return "";
}

export default RegionSelector
