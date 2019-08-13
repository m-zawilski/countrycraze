import React from 'react'

function SubregionSelector(props) {
  return (
    <select 
    value={props.selectedSubregion}
    onChange={(e) => {
      props.setSelectedSubregion(e.target.value);
      props.changeSubregionFilter(e.target.value);
    }}
  >
    {props.subregions.map((subregion, i) => {
      return <option 
        value={subregion}
        key={i}
      >{subregion ? subregion : "All"}</option>
    })}
  </select>
  )
}

export default SubregionSelector
