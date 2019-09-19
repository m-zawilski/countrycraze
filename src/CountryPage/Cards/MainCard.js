import React from 'react';
import Card from './Card';
import EmptyCheck from '../../Common/EmptyCheck';

function MainCard({country}) {
  return (
    <Card>
      <h2>General information</h2>
      <p>
        <span className="left">Name</span> 
        <span className="right">{country.name}</span>
      </p>
      <p>
        <span className="left">Native name</span> 
        <span className="right">{country.nativeName}</span>
      </p>
      <p>
        <span className="left">Region</span> 
        <span className="right">{country.region}</span>
      </p>
      <EmptyCheck value={country.subregion}>
        <p>
        <span className="left">Subregion</span> 
        <span className="right">{country.subregion}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.capital}>
        <p>
        <span className="left">Capital</span> 
        <span className="right">{country.capital}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.demonym}>
        <p>
          <span className="left">Demonym</span> 
          <span className="right">{country.demonym}</span>
        </p>
      </EmptyCheck>
    </Card>
  )
}

export default MainCard
