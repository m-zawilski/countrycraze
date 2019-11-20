import React, { useState } from "react";
import CountryCard from "./CountryCard/CountryCard";
import styled from "styled-components";
import PaginationButtons from "./PaginationButtons/PaginationButtons";

const CardsDiv = styled.div`
  display: flex;
  max-width: 960px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const Div = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const P = styled.div`
  color: white;
  text-align: center;
  padding-top: 30px;
`

function Results(props) {
  const [pageResultsSize, setPageResultsSize] = useState(20);

  if(props.countries.length === 0){
    return <Div>
      <P>
        Sorry. Nothing was found. Change your search criteria.
      </P>
    </Div>
  }

  return (
    <Div>
      <PaginationButtons
        pagesCount={Math.ceil(props.countries.length/pageResultsSize)}
        page={props.page}
        setPage={props.setPage}
      />
      <CardsDiv>
        {props.countries.map((country, i) => {
          return (i < props.page * pageResultsSize && i >= (props.page - 1) * pageResultsSize ) ? (
              <CountryCard 
                country={country}
                key={i}
              />
            ) : null;
        })}
      </CardsDiv>
      <PaginationButtons
        pagesCount={Math.ceil(props.countries.length/pageResultsSize)}
        page={props.page}
        setPage={props.setPage}
      />
    </Div>
  )
}
    
export default Results;