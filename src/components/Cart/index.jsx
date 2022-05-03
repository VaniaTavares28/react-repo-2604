import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { roundWithTwoDecimals } from '../../helpers/functions';
import './style.scss';

const CartCard = ({cartItem, editCart}) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const { title, quantity, image, id} = cartItem;
 
  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    updateQuantity({id, quantity: newQuantity})
  }

  const decreaseQuantity = () => {
    const newQuantity = quantity - 1;
    updateQuantity({id, quantity: newQuantity})
  }

  const handleChange = ({target}) => {
    updateQuantity({id, quantity: target.value})
  }

  const handleRemove = () => {
    removeFromCart({id})
  }

  return (
    <div className='cart-card'>
      <div className='cart-card-image'>
        <img src={image} alt={title}/>
      </div>
      <div className='cart-card-content'>
        <h5>{quantity}x {title}</h5>

        {editCart && <div className='edit-cart'><span onClick={handleRemove}>&#10005;</span>
        <button onClick={decreaseQuantity} disabled={quantity === 0} className={quantity > 0 ? "btn" : "btn-disabled"}>-</button>
        <input value={quantity} type="number" min="0" onChange={handleChange}/>
        <button onClick={increaseQuantity} className="btn">+</button>
        </div>}
      </div>
    </div>
  )

 
}

const Cart = () => {
  const {cartTotal, shoppedItems, closeCart } = useContext(CartContext);
  const [editCart, setEditCart] = useState(false);
  const extra = 5;

  const handleClick = () => {
    setEditCart(!editCart);
  }

  const handleCartClick = () => {
    closeCart()
  }

  return (
    <div className='cart-container'>
      <span onClick={handleCartClick}>Close Cart</span>
      <div className='cart-header'>
    <h3>Order Summary</h3>
    <p>{shoppedItems.length} items</p>
    <button onClick={handleClick}>{editCart ? "Save changes" :"Edit"}</button>
    </div>
    <div className='cart-items-container'>
      {shoppedItems.map(cartItem => <CartCard key={cartItem.id} cartItem={cartItem} editCart={editCart}/>)}
    </div>
    <div className='total-info'>
      <p><strong>Subtotal</strong></p>
      <p><strong>${roundWithTwoDecimals(cartTotal)}</strong></p>
    </div>
    <div className='total-info'>
    <p><strong>Tax</strong> (calculated in checkout)</p>
    <p><strong>--</strong></p>
  </div>
  <div className='total-info'>
    <p><strong>Shipping</strong> (free standard over $40)</p>
    <p><strong>{cartTotal > 40 ? "Free" : `$${extra}`}</strong></p>
  </div>
  <div className='total-sum'>
    <h4>Estimated Total</h4>
    <h4>{`$${roundWithTwoDecimals((cartTotal + 0.23 * cartTotal + (cartTotal <= 40 && extra)))}`}</h4>
  </div>

  </div>
  )
}

export default Cart
