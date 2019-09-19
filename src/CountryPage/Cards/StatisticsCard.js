import React from 'react'
import Card from './Card';

function StatisticsCard({country}) {
  return (
    <Card>
      <h3>Statistics</h3>
      <p>
        <span className="left">Area</span> 
        <span className="right">{country.area}</span>
      </p>
      <p>
        <span className="left">Population</span> 
        <span className="right">{country.population}</span>
      </p>
      <p>
        <span className="left">Population density</span> 
        <span className="right">{(country.population/country.area).toFixed(2)}</span>
      </p>
    </Card>
  )
}

export default StatisticsCard
