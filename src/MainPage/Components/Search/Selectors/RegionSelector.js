import React, { useEffect } from 'react';
import Selector from './Selector';

const RegionSelector = (props) => {
  const region = findRegion(props.regionsMapping, props.selectedSubregion);
  const defaultRegion = props.selectedRegion ? props.selectedRegion 
  : props.selectedSubregion ? region
  : "";
  const defaultSubregions = props.regionsMapping[defaultRegion]["subregion"].sort();
  const setSubregions = props.setSubregions;

  useEffect(() => {
    if(defaultSubregions.length > 1){
      setSubregions(["", ...defaultSubregions])
    } else {
      setSubregions([""])
    }
  }, [defaultSubregions, setSubregions])

  return (
    <Selector 
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
      }}
      isActive={props.selectedRegion}
    >
      {Object.keys(props.regionsMapping).sort().map((region, i) => {
        return <option 
          value={region}
          key={i}
        >{region ? region : 
          props.selectedRegion === region ? "Region: Any" : "All"}</option>
      })}
    </Selector>
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
