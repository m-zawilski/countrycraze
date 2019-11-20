import React, { useState } from 'react';
import { SORTED_BY } from '../../../../Common/Constants';
import Selector from './Selector';

function SortingSelector(props) {
  const [selectedFilter, setSelectedFilter] = useState(SORTED_BY.ALPHABETICAL);

  return ( 
    <Selector 
      value={selectedFilter}
      onChange={(e) => {
        setSelectedFilter(e.target.value);
        props.changeSorting(e.target.value);
      }}
      isActive={selectedFilter !== SORTED_BY.ALPHABETICAL}
    >
      {Object.keys(SORTED_BY).map((sorting, i) => {
        return <option 
          value={sorting}
          key={i}
        >Sort by: {sorting.charAt(0) + sorting.slice(1).toLowerCase().replace("_", " ")}</option>
      })}
    </Selector>
  )
}

export default SortingSelector;
