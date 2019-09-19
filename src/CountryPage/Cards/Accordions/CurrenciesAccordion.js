import React, { useState } from 'react';
import Accordion from './Accordion';

function CurrenciesAccordion(props) {
  const [ activeId, setActiveId ] = useState(0);
  const currentCurrency = props.values[activeId];

  return (
    <>
      <h3>Currencies</h3>
      <Accordion
        length={props.values.length}
        setActiveId={setActiveId}
        activeId={activeId}
      >
        <p>
          <span className="left">Name</span> 
          <span className="right">{currentCurrency.name}</span>
        </p>
        <p>
          <span className="left">Code</span> 
          <span className="right">{currentCurrency.code}</span>
        </p>
        <p>
          <span className="left">Symbol</span> 
          <span className="right">{currentCurrency.symbol}</span>
        </p>
      </Accordion>
    </>
  )
}

export default CurrenciesAccordion
