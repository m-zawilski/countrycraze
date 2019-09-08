import React, { useState } from 'react'
import { SORTED_BY } from "../../../../Common/Constants.js";
import styled from "styled-components";

const SelectorLabel = styled.label`
  font-size: .8em;
  margin: 0 5px 0 1px;
`

const SelectorsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Div = styled.div`
  cursor: pointer;
  * {
    cursor: pointer;
  }
`

function SortingSelectors(props) {
  const [selectedFilter, setSelectedFilter] = useState(SORTED_BY.ALPHABETICAL);

  return ( 
    <SelectorsDiv>
      {
        Object.keys(SORTED_BY).map((sorting, i) => {
          return (
            <Div  
              onClick={e => {
                props.changeSorting(sorting);
                setSelectedFilter(sorting);
              }}
              key={i}
            >
              <input 
                type="radio"
                key={i}
                name="sorting"
                value={sorting}
                checked={sorting === selectedFilter}
              />
              <SelectorLabel>
                {sorting.charAt(0) + sorting.slice(1).toLowerCase().replace("_", " ")}
              </SelectorLabel>
            </Div>
          )
        })
      }
    </SelectorsDiv>
  )
}

export default SortingSelectors;
