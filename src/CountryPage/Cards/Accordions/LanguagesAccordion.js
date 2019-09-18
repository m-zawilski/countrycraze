import React, { useState } from 'react';
import Accordion from './Accordion';

function LanguagesAccordion(props) {
  const [ activeId, setActiveId ] = useState(0);
  const currentLanguage = props.values[activeId];

  return (
    <>
      <h3>Languages</h3>
      <Accordion
        length={props.values.length}
        setActiveId={setActiveId}
        activeId={activeId}
      >
        <p><span>Name</span> {currentLanguage.name}</p>
        <p><span>Native name</span> {currentLanguage.nativeName}</p>
        <p><span>Codes</span> {currentLanguage.iso639_1} {currentLanguage.iso639_2}</p>
      </Accordion>
    </>
  )
}

export default LanguagesAccordion
