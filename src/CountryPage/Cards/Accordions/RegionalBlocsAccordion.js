import React, { useState } from 'react';
import Accordion from './Accordion';
import EmptyCheck from '../../../Common/EmptyCheck';

function RegionalBlocsAccordion(props) {
  const [ activeId, setActiveId ] = useState(0);
  const currentBloc = props.values[activeId];

  return (
    <>
      <h3>Regional blocs</h3>
      <Accordion
        length={props.values.length}
        setActiveId={setActiveId}
        activeId={activeId}
      >
        <p>
          <span className="left">Name</span> 
          <span className="right">{currentBloc.name}</span>
        </p>
        <EmptyCheck value={currentBloc.code}>
          <p>
            <span className="left">Acronym</span> 
            <span className="right">{currentBloc.code}</span>
          </p>
        </EmptyCheck>
        <EmptyCheck value={currentBloc.otherNames}>
          <p>
            <span className="left">Other names</span> 
            <div className="right">
              {currentBloc.otherNames.map((el, i) => <p key={i}>{el}</p>)}
            </div>
          </p>
        </EmptyCheck>
        <EmptyCheck value={currentBloc.otherAcronyms}>
          <p>
            <span className="left">Other acronyms</span> 
            <div className="right">
              {currentBloc.otherAcronyms.map((el, i) => <p key={i}>{el}</p>)}
            </div>
          </p>
        </EmptyCheck>
      </Accordion>
    </>
  )
}

export default RegionalBlocsAccordion
