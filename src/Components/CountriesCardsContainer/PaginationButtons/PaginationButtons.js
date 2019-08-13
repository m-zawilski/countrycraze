import React from 'react';
import styled from "styled-components";

const PaginationButtonsContainer = styled.div`
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
  return [...Array(pagesCount).keys()].map((el) => {
    const pageNumber = el+1;
    return <PaginationButton
      onClick={() => setPage(pageNumber)}
      active={currentPage === pageNumber}
      key={pageNumber}
    >
      {pageNumber}
    </PaginationButton>
  })
}

function PaginationButtons(props) {
  return (
    <PaginationButtonsContainer>
      {getPaginationButtons(props.pagesCount, props.setPage, props.page)}
    </PaginationButtonsContainer>
  )
}

export default PaginationButtons
