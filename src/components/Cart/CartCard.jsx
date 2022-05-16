import React, { useContext } from "react";
import { toast } from "react-toastify";
import CartContext from "../../context/CartContext";

const CartCard = ({ cartItem, editCart }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const { title, quantity, image, id } = cartItem;

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    updateQuantity({ id, quantity: newQuantity });
  };

  const decreaseQuantity = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 1;
    newQuantity === 1 &&
      toast.warning("Removing the remaing item, will remove it from cart");
    updateQuantity({ id, quantity: newQuantity });
  };

  const handleChange = ({ target }) => {
    if (target.value > 0) {
      target.value === 1 &&
        toast.warning("Removing the remaing item, will remove it from cart");
      updateQuantity({ id, quantity: target.value });
    }
  };

  const handleRemove = () => {
    removeFromCart({ id });
  };

  return (
    <div className="cart-card">
      <div className="cart-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="cart-card-content">
        <h5>
          {quantity}x {title}
        </h5>

        {editCart && (
          <div className="edit-cart">
            <button onClick={handleRemove} className="btn-absolute">
              &#10005;
            </button>
            <button onClick={decreaseQuantity} className="btn">
              -
            </button>
            <input
              value={quantity}
              type="number"
              range={0 - 100}
              onChange={handleChange}
            />
            <button onClick={increaseQuantity} className="btn">
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCard;
