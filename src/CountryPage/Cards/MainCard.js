import React from 'react';
import Card from './Card';
import EmptyCheck from '../../Common/EmptyCheck';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NeighboursDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

function MainCard({country}) {
  return (
    <Card>
      <h2>General information</h2>
      <p><span>Name</span> <span>{country.name}</span></p>
      <p><span>Native name</span> <span>{country.nativeName}</span></p>
      <EmptyCheck value={country.altSpellings}>
        <h3>Alternative spellings</h3>
        <p>{Object.values(country.altSpellings).reduce((acc, el) => {
          return acc + el + " ";
        }, "")}</p>
      </EmptyCheck>
      <h3>Codes</h3>
      <p>{`${country.alpha2Code} ${country.alpha3Code} ${country.cioc} ${country.numericCode}`}</p>
      <p><span>Region</span> <span>{country.region}</span></p>
      <EmptyCheck value={country.subregion}>
        <p><span>Subregion</span> <span>{country.subregion}</span></p>
      </EmptyCheck>
      <EmptyCheck value={country.capital}>
        <p><span>Capital</span> <span>{country.capital}</span></p>
      </EmptyCheck>
      <EmptyCheck value={country.borders}>
          <h3>Neighbours</h3>
          <NeighboursDiv>
              {country.borders.map((neighbour, i) => {
                return <Link 
                  to={`/countrycraze/country/${neighbour}`} 
                  key={i}
                  style={{ color: '#13e', textDecoration: 'inherit', margin: '0 3px'}}
                >{neighbour}</Link>
              }, "")}
          </NeighboursDiv>
      </EmptyCheck>
    </Card>
  )
}

export default MainCard
