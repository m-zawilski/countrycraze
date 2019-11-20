import React from 'react';
import Accordion from './Accordion';
import EmptyCheck from '../../../Common/EmptyCheck';
import styled from 'styled-components';
import { useAccordionValues } from './Hooks';

const OtherSpelling = styled.span`
  display: block;
  margin: 0;
  padding: 0;
`

function RegionalBlocsAccordion(props) {
  const [ activeId, setActiveId, getValue ] = useAccordionValues(props.values);
  const currentBloc = getValue();

  return (
    <>
      <h3>Regional blocs</h3>
      <Accordion
        length={props.values.length}
        setActiveId={setActiveId}
        activeId={activeId}
        values={props.values}
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
            <span className="right">
              {currentBloc.otherNames.map((el, i) => 
                <OtherSpelling key={i}>{el}</OtherSpelling>)
              }
            </span>
          </p>
        </EmptyCheck>
        <EmptyCheck value={currentBloc.otherAcronyms}>
          <p>
            <span className="left">Other acronyms</span> 
            <span className="right">
              {currentBloc.otherAcronyms.map((el, i) => 
                <OtherSpelling key={i}>{el}</OtherSpelling>)
              }
            </span>
          </p>
        </EmptyCheck>
      </Accordion>
    </>
  )
}

export default RegionalBlocsAccordion
