import React from 'react';
import styled from "styled-components";

const activeColor = "#222";
const inactiveColor = "#999";

const PaginationButtonsDiv = styled.div`
  margin: 15px 0;
`

const PaginationButton = styled.button`
  padding: 8px;
  margin: 2px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  color: ${props => props.active ? activeColor : inactiveColor};
  background: ${props => props.active ? inactiveColor : activeColor};
  border: 2px solid ${inactiveColor};
  width: 35px;
  height: 35px;
  transition-duration: .3s;

  &:hover {
    background: ${inactiveColor};
    color: ${activeColor};
  }
`

const Span = styled.button`
  padding: 8px;
  margin: 2px;
  border-radius: 4px;
  outline: none;
  cursor: default;
  color: ${"#777"};
  background: ${activeColor};
  border: 2px solid ${"#777"};
  width: 35px;
  height: 35px;
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
        return <Span key={pageNumber}><strong>...</strong></Span>;
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
