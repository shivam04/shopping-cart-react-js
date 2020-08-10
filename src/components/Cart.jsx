import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import cartService from "../service/cartService";

function Cart(props) {
  const cartContext = useContext(CartContext);

  const { cart, increase, decrease, removeItem, clear, checkOut } = cartContext;

  return (
    <div className="container">
      Cart {cart && cart.length > 0 ? cart.length : 0}
      <br />
      <span>Total Amount: {cartService.getTotalAmount()}</span>
      {cart && cart.length > 0 && (
        <button className="btn btn-danger ml-2" onClick={() => clear()}>
          Clear Cart
        </button>
      )}
      {cart &&
        cart.map((cartItem) => (
          <div key={cartItem.id}>
            <li>{cartItem.title}</li>
            <p>{cartItem.quantity}</p>
            <button onClick={() => increase(cartItem)}>+</button>
            <button onClick={() => decrease(cartItem)}>-</button>
            <button onClick={() => removeItem(cartItem)}>Remove</button>
          </div>
        ))}
      <br />
      {cart && cart.length > 0 && (
        <button className="btn btn-primary" onClick={checkOut}>
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
