import React from 'react'
import Card from './Card';
import CurrenciesAccordion from './Accordions/CurrenciesAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function CurrencyAccordionCard({country}) {
  return (
    <EmptyCheck value={country.currencies}>
      <Card>
          <CurrenciesAccordion
            values={country.currencies}
          />
      </Card>
    </EmptyCheck>
  )
}

export default CurrencyAccordionCard
