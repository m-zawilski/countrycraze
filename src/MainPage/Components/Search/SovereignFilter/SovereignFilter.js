import React, { useState } from 'react';
import styled from "styled-components";

const Sovereign = styled.button`
  background: ${props => props.isActive ? "#1bb21b" : "#aaa"};
  border: none;
  outline: none;
  border-radius: 2px;
  color: ${props => props.isActive ? "#0c4c0c" : "#eee"};
  font-size: .8em;
  font-style: italic;
  cursor: pointer;
  margin: 2px;
  box-shadow: 1px 1px 2px #333;
`

function SovereignFilter(props) {
  const [ isActive, setIsActive ] = useState(false);

  return (
    <>
      <Sovereign 
        onClick={() => {
          props.swapSovereignStates();
          setIsActive(!isActive);
        }
        }
        isActive={isActive}
      >
        only sovereign
      </Sovereign> 
    </>
  )
}

export default SovereignFilter
