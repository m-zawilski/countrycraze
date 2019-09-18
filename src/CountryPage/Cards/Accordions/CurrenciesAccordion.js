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
        <p><span>Name</span> {currentCurrency.name}</p>
        <p><span>Code</span> {currentCurrency.code}</p>
        <p><span>Symbol</span> {currentCurrency.symbol}</p>
      </Accordion>
    </>
  )
}

export default CurrenciesAccordion
