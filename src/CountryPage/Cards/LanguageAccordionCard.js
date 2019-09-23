import React from 'react'
import Card from './Card';
import LanguagesAccordion from './Accordions/LanguagesAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function LanguageAccordionCard({country}) {
  return (
    <EmptyCheck value={country.languages}>
      <Card>
          <LanguagesAccordion
            values={country.languages}
          />
      </Card>
    </EmptyCheck>
  )
}

export default LanguageAccordionCard
