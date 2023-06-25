import React, { useContext } from "react";
import "./navbar.scss";
import { ReactComponent as CartIcon } from '../../assets/icon/cartIcon.svg';
import { CartContext } from "../../context/CartContext";
import { Outlet, useNavigate } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const handleCart = () => {
    return navigate('/cart');
  }

  return (
    <>
      <div id="navbar">
        <div id="navbar__container">
          <div id="navbar__container__right">
            <p>Bakery Shop</p>
          </div>
          <button id="navbar__container__left" onClick={handleCart} >
            <div id="navbar__container__left__items">
                {cart.length}
            </div>
            <CartIcon></CartIcon>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
