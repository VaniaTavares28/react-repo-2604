import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartCard from "./CartCard";
import { roundWithTwoDecimals } from "../../helpers/functions";
import "./style.scss";

const Cart = ({ closeCart }) => {
  const { cartTotal, shoppedItems } = useContext(CartContext);
  const [editCart, setEditCart] = useState(false);
  const extra = 5;

  const handleClick = () => {
    setEditCart(!editCart);
  };

  return (
    <div className="cart-container">
      <span onClick={closeCart}>&#10005;</span>
      <div className="cart-header">
        <h3>Order Summary</h3>
        <p>{shoppedItems.length} items</p>
        {shoppedItems.length ? (
          <button onClick={handleClick}>
            {editCart ? "Save changes" : "Edit"}
          </button>
        ) : null}
      </div>
      {shoppedItems.length ? (
        <>
          <div className="cart-items-container">
            {shoppedItems.map((cartItem) => (
              <CartCard
                key={cartItem.id}
                cartItem={cartItem}
                editCart={editCart}
              />
            ))}
          </div>
          <div className="total-info">
            <p>
              <strong>Subtotal</strong>
            </p>
            <p>
              <strong>${roundWithTwoDecimals(cartTotal)}</strong>
            </p>
          </div>
          <div className="total-info">
            <p>
              <strong>Tax</strong> (calculated in checkout)
            </p>
            <p>
              <strong>--</strong>
            </p>
          </div>
          <div className="total-info">
            <p>
              <strong>Shipping</strong> (free standard over $40)
            </p>
            <p>
              <strong>{cartTotal > 40 ? "Free" : `$${extra}`}</strong>
            </p>
          </div>
          <div className="total-sum">
            <h4>Estimated Total</h4>
            <h4>{`$${roundWithTwoDecimals(
              cartTotal + 0.23 * cartTotal + (cartTotal <= 40 && extra)
            )}`}</h4>
          </div>
        </>
      ) : (
        <div>
          <p>
            <strong>No items in the cart</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
