import React, { useState } from "react";
import CountryCard from "./CountryCard/CountryCard";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  max-width: 960px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

function CountriesCardsContainer(props) {
  const [pageResults, setPageResults] = useState(20);
  const [paginationStart, setPaginationStart] = useState(0);

  if(props.countries.length === 0){
    return <p>
      Sorry. Nothing was found. Change your search criteria.
    </p>
  }

  return (
    <CardsContainer>
      {props.countries.map((country, i) => {
        return i < paginationStart + pageResults ? (
            <CountryCard 
              country={country}
              key={i}
            />
          ) : null;
      })}
    </CardsContainer>
  )
}
    
export default CountriesCardsContainer;