import React from 'react'
import Card from './Card';
import EmptyCheck from '../../Common/EmptyCheck';

function CodesCard({country}) {
  return (
    <Card>
      <h3>Codes</h3>
      <EmptyCheck value={country.demonym}>
        <p><span>Demonym</span> {country.demonym}</p>
      </EmptyCheck>
      <p><span>Domain</span> {Object.values(country.topLevelDomain).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p><span>Phone codes</span> {Object.values(country.callingCodes).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p><span>Timezones</span> {Object.values(country.timezones).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
    </Card> 
  )
}

export default CodesCard
