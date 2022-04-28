import React from 'react';
import "./style.scss"

const HeaderContainer = ({children}) => {
  return (
    <div className='main-container'>
      {children}
    </div>
  )
}

export default HeaderContainer
