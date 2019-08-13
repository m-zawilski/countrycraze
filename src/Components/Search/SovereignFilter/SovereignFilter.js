import React from 'react'

function SovereignFilter(props) {
  return (
    <>
      <label>Sovereign</label> 
      <input 
        type="checkbox"
        onChange={() => props.swapSovereignStates()}
      />
    </>
  )
}

export default SovereignFilter
