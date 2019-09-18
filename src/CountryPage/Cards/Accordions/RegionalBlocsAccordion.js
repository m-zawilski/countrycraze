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
        <p><span>Name</span> {currentBloc.name}</p>
        <EmptyCheck value={currentBloc.code}>
          <p><span>Acronym</span> {currentBloc.code}</p>
        </EmptyCheck>
        <EmptyCheck value={currentBloc.otherNames}>
          <p><span>Other names</span> {currentBloc.otherNames.map(n => n + ' ')}</p>
        </EmptyCheck>
        <EmptyCheck value={currentBloc.otherAcronyms}>
          <p><span>Other acronyms</span> {currentBloc.otherAcronyms.map(n => n + ' ')}</p>
        </EmptyCheck>
      </Accordion>
    </>
  )
}

export default RegionalBlocsAccordion
