import React, { useState } from 'react'

const getButtons = (length, setActiveId) => {
  if(length <= 1) { 
    return null 
  }
  let tempArray = Array(length).fill(null);
  
  return tempArray.map((el, i) => {
    return <button onClick={() => setActiveId(i)}>{i}</button>
  })
}

function Accordion(props) {
  return (
    <div>
      {props.children}
      {
        getButtons(props.length, props.setActiveId)
      }
    </div>
  )
}

export default Accordion
