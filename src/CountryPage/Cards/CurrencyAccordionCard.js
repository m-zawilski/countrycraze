import React from 'react'
import Card from './Card';
import CurrenciesAccordion from './Accordions/CurrenciesAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function CurrencyAccordionCard({country}) {
  return (
    <Card>
      <EmptyCheck value={country.currencies}>
        <CurrenciesAccordion
          values={country.currencies}
        />
      </EmptyCheck>
    </Card>
  )
}

export default CurrencyAccordionCard
