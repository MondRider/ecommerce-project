import React from 'react';
import SearchBar from '../searchBar/searchBar';
import CartButton from '../CartButton/CartButton';

import './header.css';

function Header() {
  return(
    <header className='header'>
      <div className='container'>
        <h1>Pocketbox</h1>
        <SearchBar></SearchBar>
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;