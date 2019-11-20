import React, { useState } from 'react'
import Selector from './Selector';

function SubregionSelector(props) {
  return (
    <Selector 
      value={props.selectedSubregion}
      onChange={(e) => {
        props.setSelectedSubregion(e.target.value);
        props.changeSubregionFilter(e.target.value);
        props.changeQueryParameters(`region=${props.selectedRegion}${e.target.value ? `&subregion=${e.target.value}` : ''}`);
      }}
      isActive={props.selectedSubregion}
    >
      {props.subregions.map((subregion, i) => {
        return <option 
          value={subregion}
          key={i}
        >{subregion ? subregion : 
          props.selectedSubregion === subregion ? "Subregion: Any" : "All"}</option>
      })}
    </Selector>
  )
}

export default SubregionSelector
