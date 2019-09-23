import React from 'react'
import styled from "styled-components";

const SubregionSelect = styled.select`
  width: 180px;
  text-align-last: center;
  margin: 3px;
  cursor: pointer;
  background: white;
`
function SubregionSelector(props) {
  return (
    <SubregionSelect 
      value={props.selectedSubregion}
      onChange={(e) => {
        props.setSelectedSubregion(e.target.value);
        props.changeSubregionFilter(e.target.value);
        props.changeQueryParameters(`region=${props.selectedRegion}${e.target.value ? `&subregion=${e.target.value}` : ''}`)
      }}
    >
    {props.subregions.map((subregion, i) => {
      return <option 
        value={subregion}
        key={i}
      >{subregion ? subregion : "(Subregion)"}</option>
    })}
  </SubregionSelect>
  )
}

export default SubregionSelector
