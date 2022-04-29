import React from 'react';
import "./style.scss";

const CardsHeader = ({cardsHeader}) => {
  return (
    <div className='cards-header'><h4>{cardsHeader}</h4> <h4>Shop all products</h4></div>
  )
}

export default CardsHeader
