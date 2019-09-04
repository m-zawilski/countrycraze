import React, { useState } from "react";
import CountryCard from "./CountryCard/CountryCard";
import styled from "styled-components";
import PaginationButtons from "./PaginationButtons/PaginationButtons";

const CardsContainer = styled.div`
  display: flex;
  max-width: 960px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const ResultsContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function CountriesCardsContainer(props) {
  const [pageResultsSize, setPageResultsSize] = useState(20);

  if(props.countries.length === 0){
    return <p>
      Sorry. Nothing was found. Change your search criteria.
    </p>
  }

  return (
    <ResultsContainer>
      <PaginationButtons
        pagesCount={Math.ceil(props.countries.length/pageResultsSize)}
        page={props.page}
        setPage={props.setPage}
      />
      <CardsContainer>
        {props.countries.map((country, i) => {
          return (i < props.page * pageResultsSize && i >= (props.page - 1) * pageResultsSize ) ? (
              <CountryCard 
                country={country}
                key={i}
              />
            ) : null;
        })}
      </CardsContainer>
      <PaginationButtons
        pagesCount={Math.ceil(props.countries.length/pageResultsSize)}
        page={props.page}
        setPage={props.setPage}
      />
    </ResultsContainer>
  )
}
    
export default CountriesCardsContainer;