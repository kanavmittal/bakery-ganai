import React, { useContext, useMemo } from 'react'
import './common.scss'
import { CartContext } from '../../context/CartContext';

function ProductCard({ id, name, price, image, desc, handleAddToCart}) {
  const { cart } = useContext(CartContext)
  const defaultImage = 'https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60';
  const getQuantity = () => {
    if ( cart ) {
      const cartProduct = cart.find((e) => e.id === id);
      return cartProduct?.quantity ? cartProduct?.quantity : 0;
    }
    return 0;
  }
  const quantity = useMemo(() => getQuantity() , [cart]);
  return (
    <div id="product_card">
      {
        quantity ? <div id="product_card_quantity">{quantity}</div> :
        <></>
      }
        <div id="product_card_image">
            <img src={image || defaultImage} alt="bakeryitem" />
        </div>
        <div id="product_card_body">
            <h1>{name}</h1>
            <h2>{desc}</h2>
            <span>${price}</span>
        </div>
        <button id="product_card_cart_button" onClick={() =>handleAddToCart(id)}>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard