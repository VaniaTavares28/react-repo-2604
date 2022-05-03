import React from 'react'
import "./style.scss";

const HeaderContainer = ({children}) => {
  return (
    <div className='header-container'>
      {children}
    </div>
  )
}

export default HeaderContainer
