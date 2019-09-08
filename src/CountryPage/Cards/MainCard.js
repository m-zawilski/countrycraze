import React from 'react'
import Card from './Card';

function MainCard({country}) {
  return (
    <Card>
      <p>{country.name}</p>
      <p>{country.nativeName}</p>
      <p>{Object.values(country.altSpellings).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <p>{`${country.alpha2Code} ${country.alpha3Code} ${country.cioc} ${country.numericCode}`}</p>
      <p>{country.region}</p>
      <p>{country.subregion}</p>
      <p>{country.capital}</p>
      <p>{Object.values(country.borders).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
    </Card>
  )
}

export default MainCard
