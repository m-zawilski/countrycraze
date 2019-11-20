import { useState } from 'react';

const useAccordionValues = (values) => {
  const [ activeId, setActiveId ] = useState(0);

  const getValue = () => {
    if(activeId > values.length - 1){
      return values[0];
    } else {
      return values[activeId];
    }
  }

  return [ activeId, setActiveId, getValue ];
}

export {
  useAccordionValues
}