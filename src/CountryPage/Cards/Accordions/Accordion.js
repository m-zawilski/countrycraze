import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  border: 1px solid #ccc;

  button {
    flex: 1;
    background: none;
    border: none;
    padding: 3px 0;
    cursor: pointer;
    outline: none;

    &.active {
      background: #ccc;

      &:hover {
        background: #ddd;
      }
    }

    &:hover {
      background: #ccc;
    }
  }
`

const getButtons = (length, setActiveId, activeId) => {
  if(length <= 1) { 
    return null 
  }
  let tempArray = Array(length).fill(null);
  
  return (
    <Div>
      {tempArray.map((el, i) => {
        return <button 
            className={activeId === i ? "active" : ""}
            onClick={() => setActiveId(i)}
            key={i}
          >{i}</button>
      })}
    </Div>
  )
}

function Accordion(props) {
  return (
    <>
      {props.children}
      {
        getButtons(props.length, props.setActiveId, props.activeId)
      }
    </>
  )
}

export default Accordion
