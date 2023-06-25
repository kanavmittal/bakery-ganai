import React, { useContext } from "react";
import "./listings.scss";
import { CartContext } from "../../context/CartContext";
import ProductCard from "../Common/productCard";
import { ProductContext } from "../../context/ProductsContext";



function Listings() {
  const { cart , setCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const handleAddToCart = (id) => {
    let quantity = 1;
    const newCart = cart.filter((product) => {
        if( product.id === id ) {
            quantity = product.quantity + 1;
            return false;
        }
        return true;
    });
    setCart([...newCart, { id, quantity} ])
  }
  return (
    <div id="listing">
      <div id="listing_title">New Products</div>
      <div id="listing_divider"></div>
      <div id="listing_body">
        {products.map((product, id) => {
          return <ProductCard key={id} id={id} {...product} handleAddToCart={handleAddToCart} />;
        })}
      </div>
    </div>
  );
}

export default Listings;
