import React from 'react';
import Accordion from './Accordion';
import EmptyCheck from '../../../Common/EmptyCheck';
import { useAccordionValues } from './Hooks';

function CurrenciesAccordion(props) {
  const [ activeId, setActiveId, getValue ] = useAccordionValues(props.values);
  const currentCurrency = getValue();

  if(currentCurrency.name === null || currentCurrency.name === '[E]'){
    return null;
  }

  return (
    <>
      <h3>Currencies</h3>
      <Accordion
        length={props.values.length}
        setActiveId={setActiveId}
        activeId={activeId}
        values={props.values}
      >
        <p>
          <span className="left">Name</span> 
          <span className="right">{currentCurrency.name}</span>
        </p>
        <EmptyCheck value={currentCurrency.code}>
          {
            <p>
              <span className="left">Code</span> 
              <span className="right">{currentCurrency.code === '(none)' ? '-' : currentCurrency.code}</span>
            </p>
          }
        </EmptyCheck>
        <p>
          <span className="left">Symbol</span> 
          <span className="right">{currentCurrency.symbol}</span>
        </p>
      </Accordion>
    </>
  )
}

export default CurrenciesAccordion
