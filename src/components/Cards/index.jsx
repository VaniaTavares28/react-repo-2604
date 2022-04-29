import React from 'react';
import { cardImages } from '../../assets/images';
import Button from '../Button';
import HighlightBanner from '../HighlightBanner';
import "./style.scss"

const placeholder = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nemo velit nostrum eligendi. Similique odio natus ullam id libero vero!"
const Card = ({card, size}) => {
  const {caption, content, source, type, overlay} = card;
return (<div className={`card-wrapper ${size}`}>
{!!type && <HighlightBanner type={type} absolute/>}
    {!!overlay && <img src={overlay} alt="overlay" className="img-overlay"/>}
    <img src={source} alt={caption}/>
  <h4>{caption}</h4>
  <p>{content ? placeholder: "All Natural Ingredients"}</p>
  <div className="extras-container">{content ? <p className="card-extra-bold">Read</p> : type === 'discount' ? <p className='card-extra-discount'>{`$${(0.85 * 24.99).toFixed(2)}`}</p> : ""} <p>$24.99</p></div>
  {content ? "" :  <Button buttonContent="Add to Cart" buttonType="no-fill"/>}
</div>)
}

const Cards = ({cardsText, size}) => {
  return (
    <>
    <div className='cards-header'><h4>{cardsText}</h4> <h4>Shop all products</h4></div>
    <div className="cards-container">
      {cardImages.filter(card => card.hasOwnProperty("overlay")).slice(0,4).map(card => <Card key={card.id} card={card} size={size}/>)}
    </div>
    </>
  )
}

export default Cards
