import React from 'react'
import Card from './Card';
import RegionalBlocsAccordion from './Accordions/RegionalBlocsAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function RegionalBlocAccordionCard({country}) {
  return (
    <Card>
      <EmptyCheck value={country.regionalBlocs}>
        <RegionalBlocsAccordion
          values={country.regionalBlocs}
        />
      </EmptyCheck>
    </Card>
  )
}

export default RegionalBlocAccordionCard
