import React from 'react'

function Searchbar(props) {
  return (
    <input 
        onChange={(e) => props.search(e.target.value)}
    />
  )
}

export default Searchbar
