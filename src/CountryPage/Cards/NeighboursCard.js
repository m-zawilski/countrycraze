import React from 'react';
import EmptyCheck from '../../Common/EmptyCheck';
import Card from './Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NeighboursDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 10px;

  a {
    color: #333;
    margin: 0 3px;
  }
`

function NeighboursCard({country}) {
  if(!country.borders.length){
    return null;
  }

  return (
    <EmptyCheck value={country.borders}>
      <Card>
        <h3>Neighbours</h3>
        <NeighboursDiv>
            {country.borders.map((neighbour, i) => {
              return <Link 
                to={`/countrycraze/country/${neighbour}`} 
                key={i}
              >{neighbour}</Link>
            }, "")}
        </NeighboursDiv>
      </Card>
    </EmptyCheck>
  )
}

export default NeighboursCard
