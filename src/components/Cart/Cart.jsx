import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';

function Cart() {

  const { cartItems, cartVisible } = useContext(AppContext);
  const totalprice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${cartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}></CartItem>) }

      </div>
      <div className='cart-resume'>{totalprice.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })}</div>
    </section>
  );
}

export default Cart;