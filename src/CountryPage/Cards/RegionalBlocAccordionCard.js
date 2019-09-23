import React from 'react'
import Card from './Card';
import RegionalBlocsAccordion from './Accordions/RegionalBlocsAccordion';
import EmptyCheck from '../../Common/EmptyCheck';

function RegionalBlocAccordionCard({country}) {
  return (
    <EmptyCheck value={country.regionalBlocs}>
      <Card>
          <RegionalBlocsAccordion
            values={country.regionalBlocs}
          />
      </Card>
    </EmptyCheck>
  )
}

export default RegionalBlocAccordionCard
