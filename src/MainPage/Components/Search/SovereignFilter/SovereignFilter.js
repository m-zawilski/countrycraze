import React, { useState } from 'react';
import styled from "styled-components";

const Sovereign = styled.button`
  background: ${props => props.isActive ? "#262" : "#ddd"};
  color: ${props => props.isActive ? "#ddd" : "#333"};
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  margin: 3px;
  padding: 0 8px;
  border: 2px solid #000;
  border-radius: 4px;
  height: 25px;
  width: 180px;
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
        Sovereign Only
      </Sovereign> 
    </>
  )
}

export default SovereignFilter
