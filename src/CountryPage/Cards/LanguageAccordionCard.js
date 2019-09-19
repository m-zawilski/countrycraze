import React from 'react'
import Card from './Card';
import LanguagesAccordion from './Accordions/LanguagesAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function LanguageAccordionCard({country}) {
  return (
    <Card>
      <EmptyCheck value={country.languages}>
        <LanguagesAccordion
          values={country.languages}
        />
      </EmptyCheck>
    </Card>
  )
}

export default LanguageAccordionCard
