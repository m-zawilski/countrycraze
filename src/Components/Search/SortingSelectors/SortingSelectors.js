import React, { useState } from 'react'
import { SORTED_BY } from "../../Constants.js";
import styled from "styled-components";

const SelectorLabel = styled.label`
  font-size: .8em;
  margin: 0 5px 0 1px;
`

const SortingSelectorsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SelectorContainer = styled.div`
  cursor: pointer;
  * {
    cursor: pointer;
  }
`

function SortingSelectors(props) {
  const [selectedFilter, setSelectedFilter] = useState(SORTED_BY.ALPHABETICAL);

  return ( 
    <SortingSelectorsContainer>
      {
        Object.keys(SORTED_BY).map((sorting, i) => {
          return (
            <SelectorContainer  
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
            </SelectorContainer>
          )
        })
      }
    </SortingSelectorsContainer>
  )
}

export default SortingSelectors;
