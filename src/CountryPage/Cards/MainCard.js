import React from 'react';
import Card from './Card';
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
      <h3>Alternative spellings</h3>
      <p>{Object.values(country.altSpellings).reduce((acc, el) => {
        return acc + el + " ";
      }, "")}</p>
      <h3>Codes</h3>
      <p>{`${country.alpha2Code} ${country.alpha3Code} ${country.cioc} ${country.numericCode}`}</p>
      <p><span>Region</span> <span>{country.region}</span></p>
      <p><span>Subregion</span> <span>{country.subregion}</span></p>
      <p><span>Capital</span> <span>{country.capital}</span></p>
      <h3>Neighbours</h3>
      <NeighboursDiv>
        {Object.values(country.borders).map((neighbour) => {
          return <Link 
            to={`/countrycraze/country/${neighbour}`} 
            style={{ color: '#13e', textDecoration: 'inherit', margin: '0 3px'}
          }>{neighbour}</Link>
        }, "")}
      </NeighboursDiv>
    </Card>
  )
}

export default MainCard
