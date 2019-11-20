import React from 'react'
import styled from "styled-components";

const SearchbarInput = styled.input`
  border: 2px solid #000;
  outline: none;
  height: 20px;
  font-size: 12px;
  padding: 15px 10px;
  width: 300px;
  border-radius: 8px;
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
