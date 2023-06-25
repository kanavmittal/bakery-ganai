import React, { useContext } from "react";
import "./common.scss";
import { ProductContext } from "../../context/ProductsContext";

function CartCard({ id, quantity, handleAddToCart, handleRemoveFromCart }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60";
  const { products } = useContext(ProductContext);

  const product = products[id];

  if (!product) {
    return <></>;
  }

  return (
    <div id="cart_card">
      <div id="cart_card_image">
        <img src={product.image || defaultImage} alt="bakeryitem" />
      </div>
      <div id="cart_card_body">
        <h1>{product.name}</h1>
        <span>${product.price}</span>
      </div>
      <div id="cart_card_quantity">
        <button id="cart_card_add" onClick={() => handleAddToCart(id)}>
          +
        </button>
        <span>{quantity}</span>
        <button id="cart_card_remove" onClick={() => handleRemoveFromCart(id)}>
          -
        </button>
      </div>
    </div>
  );
}

export default CartCard;
