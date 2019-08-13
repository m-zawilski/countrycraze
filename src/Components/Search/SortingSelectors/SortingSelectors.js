import React from 'react'
import { SORTED_BY } from "../../Constants.js";

function SortingSelectors(props) {
  return ( 
    <div>
    {
      Object.keys(SORTED_BY).map((sorting, i) => {
        return <input 
          type="radio"
          key={i}
          name="sorting"
          value={sorting}
          onClick={e => {props.changeSorting(e.target.value)}}
        />
      })
    }
  </div>
  )
}

export default SortingSelectors;
