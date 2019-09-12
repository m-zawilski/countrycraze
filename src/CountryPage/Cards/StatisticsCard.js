import React from 'react'
import Card from './Card';

function StatisticsCard({country}) {
  return (
    <Card>
      <h2>Statistics</h2>
      <p>{country.area}</p>
      <p>{country.population}</p>
      <p>{(country.population/country.area).toFixed(2)}</p>
    </Card>
  )
}

export default StatisticsCard
