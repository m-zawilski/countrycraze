import React from 'react';
import styled from "styled-components";

const PaginationButtonsDiv = styled.div`
  margin: 15px 0;
`

const PaginationButton = styled.button`
  padding: 8px;
  margin: 2px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: ${props => props.active ? "lightblue" : "#eee"};
`

const getPaginationButtons = (pagesCount, setPage, currentPage) => {
  let isBreakShown = false;
  return [...Array(pagesCount).keys()].map((el) => {
    const pageNumber = el+1;
    let maxDistance = 1;
    if(isCorner(currentPage, pagesCount)){
      maxDistance = 2;
    }
    if(pagesCount < 9 || Math.abs(pageNumber-currentPage) <= maxDistance || isCorner(pageNumber, pagesCount)){
      isBreakShown = false;
      return <PaginationButton
        onClick={() => setPage(pageNumber)}
        active={currentPage === pageNumber}
        key={pageNumber}
      >
        {pageNumber}
      </PaginationButton>
    } else {
      if (isBreakShown) {
        return null;
      } else {
        isBreakShown = true;
        return <span key={pageNumber}>...</span>;
      }
    }
  })
}

const isCorner = (number, maxNumber) => {
  return number === maxNumber || number === 1;
}

function PaginationButtons(props) {
  return (
    <PaginationButtonsDiv>
      {getPaginationButtons(props.pagesCount, props.setPage, props.page)}
    </PaginationButtonsDiv>
  )
}

export default PaginationButtons
