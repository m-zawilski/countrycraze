import React from "react";
import "./CountriesCardsContainer.scss";
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
  if(props.countries.length === 0){
    return <p>
      Sorry. Nothing was found. Change your search criteria.
    </p>
  }

  return (
    <CardsContainer>
      {props.countries.map((country, i) => {
        return (
            <CountryCard 
              country={country}
              key={i}
            />
          )
      })}
    </CardsContainer>
  )
}
    
export default CountriesCardsContainer;