import React from 'react'
import Card from './Card';
import EmptyCheck from '../../Common/EmptyCheck';

function StatisticsCard({country}) {
  return (
    <Card>
      <h3>Statistics</h3>
      <EmptyCheck value={country.area}>
        <p>
          <span className="left">Area</span> 
          <span className="right">{`${country.area ? country.area : ">1"} km²`}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.population}>
        <p>
          <span className="left">Population</span> 
          <span className="right">{country.population}</span>
        </p>
      </EmptyCheck>
      {getDensityRow(country.population, country.area)}
    </Card>
  )
}

const getDensityRow = (population, area) => {
  const density = population/area;
  if(density === Infinity || density < 0.01){
    return null;
  }
  return (
    <p>
      <span className="left">Population density</span> 
      <span className="right">{(density < 0 ? (density).toFixed(2) : density.toFixed(0))}</span>
    </p>
  )
}

export default StatisticsCard
