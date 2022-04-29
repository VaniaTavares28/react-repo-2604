import React from 'react';
import { cardImages } from '../../assets/images';
import HighlightBanner from '../HighlightBanner';
import "./style.scss"

const Card = ({card}) => {
  const {caption, source, type} = card;
return (<div className="card-wrapper">
{!!type && <HighlightBanner type={type}/>}
  <div className="card-wrapper-img">
    <img src={source} alt={caption}/>
  </div>
  <h4>{caption}</h4>
  <p>All Natural Ingredients</p>
  <div className="price-container">{type === 'discount' ? <p>{`$${(0.85 * 24.99).toFixed(2)}`}</p> : ""} <p>$24.99</p></div>
</div>)
}

const Cards = ({cardsText}) => {
  return (
    <>
    <div className='cards-header'><h4>{cardsText}</h4> <h4>Shop all products</h4></div>
    <div className="cards-container">
      {cardImages.filter(card => card.hasOwnProperty("overlay")).slice(0,4).map(card => <Card key={card.id} card={card}/>)}
    </div>
    </>
  )
}

export default Cards
