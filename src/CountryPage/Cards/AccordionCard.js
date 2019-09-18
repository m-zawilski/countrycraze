import React from 'react'
import Card from './Card';
import CurrenciesAccordion from './Accordions/CurrenciesAccordion';
import RegionalBlocsAccordion from './Accordions/RegionalBlocsAccordion';
import LanguagesAccordion from './Accordions/LanguagesAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function AccordionCard({country}) {
  return (
    <Card>
      <EmptyCheck value={country.languages}>
        <LanguagesAccordion
          values={country.languages}
        />
      </EmptyCheck>
      <EmptyCheck value={country.currencies}>
        <CurrenciesAccordion
          values={country.currencies}
        />
      </EmptyCheck>
      <EmptyCheck value={country.regionalBlocs}>
        <RegionalBlocsAccordion
          values={country.regionalBlocs}
        />
      </EmptyCheck>
    </Card>
  )
}

export default AccordionCard
