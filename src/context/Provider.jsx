import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState([false]);

  const value = {
    products, 
    setProducts,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible
  };

  return(
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}
  
export default Provider;

Provider.propTypes = {
  children: propTypes.any
}.isRequired;