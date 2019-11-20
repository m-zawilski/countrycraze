import React from 'react';
import Accordion from './Accordion';
import { useAccordionValues } from './Hooks';

function LanguagesAccordion(props) {
  const [ activeId, setActiveId, getValue ] = useAccordionValues(props.values);
  const currentLanguage = getValue();

  return (
    <>
      <h3>Languages</h3>
      <Accordion
        length={props.values.length}
        setActiveId={setActiveId}
        activeId={activeId}
        values={props.values}
      >
        <p>
          <span className="left">Name</span> 
          <span className="right">{currentLanguage.name}</span>
        </p>
        <p>
          <span className="left">Native name</span> 
          <span className="right">{currentLanguage.nativeName}</span>
        </p>
        <p>
          <span className="left">Codes</span> 
          <span className="right">{currentLanguage.iso639_1} {currentLanguage.iso639_2}</span>
        </p>
      </Accordion>
    </>
  )
}

export default LanguagesAccordion
