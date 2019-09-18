import React from 'react'

function EmptyCheck(props) {
  if(Array.isArray(props.value || 'string' === typeof props.value)){
    return props.value.length > 0 ? 
      <>{props.children}</>
    : null
  } else {
    return props.value ?
      <>{props.children}</>
    : null
  }

}

export default EmptyCheck
