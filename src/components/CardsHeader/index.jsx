import React from 'react';
import "./style.scss";

const CardsHeader = ({cardsHeader}) => {
  return (
    <div className="cards-header">
      <h2>{cardsHeader}</h2> <h2>Shop all products</h2>
    </div>
  );
}

export default CardsHeader
