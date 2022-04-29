import React from 'react'

const CardContainer = ({children, padding}) => {
  return (
    <div style={{padding: padding}}>
      {children}
    </div>
  )
}

export default CardContainer
