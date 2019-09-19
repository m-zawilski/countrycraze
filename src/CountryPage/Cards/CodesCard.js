import React from 'react'
import Card from './Card';
import EmptyCheck from '../../Common/EmptyCheck';

function CodesCard({country}) {
  return (
    <Card>
      <h3>Codes</h3>
      <EmptyCheck value={country.alpha2Code}>
        <p>
          <span className="left">Alpha2Code</span> 
          <span className="right">{country.alpha2Code}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.alpha3Code}>
        <p>
          <span className="left">Alpha3Code</span> 
          <span className="right">{country.alpha3Code}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.cioc}>
        <p>
          <span className="left">CIOC</span> 
          <span className="right">{country.cioc}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.numericCode}>
        <p>
          <span className="left">Numeric code</span> 
          <span className="right">{country.numericCode}</span>
        </p>
      </EmptyCheck>
      <EmptyCheck value={country.topLevelDomain}>
        <p>
          <span className="left">Domain</span> 
          <span className="right">
            {Object.values(country.topLevelDomain).reduce((acc, el) => {
              return acc + el + " ";
            }, "")}
          </span>
        </p>
      </EmptyCheck>
      <p>
        <span className="left">Phone codes</span> 
        <span className="right">
          {Object.values(country.callingCodes).reduce((acc, el) => {
            return acc + el + " ";
          }, "")}
        </span>
      </p>
      <p>
        <span className="left">Timezones</span> 
        <span className="right">
          {Object.values(country.timezones).map((el, i) => {
            return <React.Fragment key={i}>{el}</React.Fragment>
          }, "")}
        </span>
      </p>
    </Card> 
  )
}

export default CodesCard
