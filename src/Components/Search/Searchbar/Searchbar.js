import React from 'react'
import styled from "styled-components";

const SearchbarInput = styled.input`
  border: 1px solid #0c4c0c;
  outline: none;
  height: 20px;
  font-size: 12px;
  padding: 15px 10px;
  width: 150px;
  border-radius: 20px;
  margin: 2px;
`

function Searchbar(props) {
  return (
    <SearchbarInput 
      onChange={(e) => props.search(e.target.value)}
    />
  )
}

export default Searchbar
