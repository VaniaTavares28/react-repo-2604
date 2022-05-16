import React from 'react';
import Card from "./Card";
import "./style.scss"

const Cards = ({ content, size, filter}) => {

  return (
    <>
    <div className="cards-container">
      {(filter ? content.filter(filter) :  content).map(card => <Card key={card.id} card={card} size={size}/>)}
    </div>
    </>
  )
}

export default Cards
