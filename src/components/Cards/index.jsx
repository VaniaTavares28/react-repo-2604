import React from 'react';
import { cardImages } from '../../assets/images';
import { capitalizeStrings } from '../../helpers/functions';
import Button from '../Button';
import HighlightBanner from '../HighlightBanner';
import "./style.scss"

const placeholder = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nemo velit nostrum eligendi. Similique odio natus ullam id libero vero!"
const Card = ({card, size}) => {
  const {title, description, content, source, type, text, overlay, rating} = card;
return (<div className={`card-wrapper ${size}`}>
{type && <HighlightBanner type={type} text={text} absolute/>}
    {overlay && <img src={overlay} alt="overlay" className="img-overlay"/>}
    <img src={source} alt={title}/>
  <h4>{title}</h4>
  <p>{description ? description : content ? placeholder: "All Natural Ingredients"}</p>
  <div className="extras-container">{content ? <a href= "." className="card-extra-bold">Read</a> : type === 'discount' ? <p className='card-extra-discount'>{`$${(0.85 * 24.99).toFixed(2)}`}</p> : ""} <p>$24.99</p></div>
  {!content && <Button buttonContent="Add to Cart" buttonType="icon-no-fill"/>}
  {rating && <div className='rating-container'>{Object.keys(rating).map((info, index)=> <p key={`${index+"a231"}`}>{capitalizeStrings(info)}: {rating[info]}</p>)}</div>}
</div>)
}

const Cards = ({ size, filter}) => {
  return (
    <>
    <div className="cards-container">
      {(filter ? cardImages.filter(filter) :  cardImages).map(card => <Card key={card.id} card={card} size={size}/>)}
    </div>
    </>
  )
}

export default Cards
