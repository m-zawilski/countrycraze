import React from 'react'

const RegionSelector = (props) => {
  return (
    <select onChange={(e) => {
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
        >{region ? region : "All"}</option>
      })}
    </select>
  )
}

export default RegionSelector
