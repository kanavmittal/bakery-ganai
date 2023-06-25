import React, { useContext } from "react";
import "./cart.scss";
import { CartContext } from "../../context/CartContext";
import CartCard from "../../components/Common/cartCard";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    const newCart = cart.filter((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      return true;
    });
    setCart([...newCart]);
  };

  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((item) => {
      if (item.id === id) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
          return false;
        }
      }
      return true;
    });
    setCart([...newCart]);
  };

  const handleCheckout = () => {
    console.log(cart);
    setCart([]);
  }

  return (
    <div id="cart">
      <div id="cart__body">
        <div id="cart__list">
          {
            cart.length === 0 && (
              <div id="cart_empty">No Items inside Cart</div>
            )
          }
          {cart.map((item) => {
            return (
              <CartCard
                id={item.id}
                quantity={item.quantity}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              ></CartCard>
            );
          })}
        </div>
        <div id="cart__checkout">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
