import React from 'react'
import Card from './Card';

function AccordionCard({country}) {
  return (
    <Card>
      <p>{Object.values(country.regionalBlocs).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p>{Object.values(country.currencies).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p>{Object.values(country.languages).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
    </Card>
  )
}

export default AccordionCard
