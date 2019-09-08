import React from 'react'
import Card from './Card';

function CodesCard({country}) {
  return (
    <Card>
      <p>{country.demonym}</p>
      <p>{Object.values(country.topLevelDomain).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p>{Object.values(country.callingCodes).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p>{Object.values(country.timezones).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
    </Card> 
  )
}

export default CodesCard
