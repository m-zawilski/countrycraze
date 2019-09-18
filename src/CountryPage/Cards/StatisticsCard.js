import React from 'react'
import Card from './Card';

function StatisticsCard({country}) {
  return (
    <Card>
      <h3>Statistics</h3>
      <p><span>Area</span> {country.area}</p>
      <p><span>Population</span> {country.population}</p>
      <p><span>Population density</span> {(country.population/country.area).toFixed(2)}</p>
    </Card>
  )
}

export default StatisticsCard
