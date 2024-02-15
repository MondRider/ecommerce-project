import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);
  
  return(
    <button type='button' className='cart__button' onClick={ () => setCartVisible(!cartVisible) }>
      <FaShoppingCart />
      {cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;