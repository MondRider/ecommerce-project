import React, { useContext } from 'react';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([ ... cartItems, data ]);
  };

  return (
    <section className='product-card'>

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className='card__image' />
      <div className='card__infos'>
        <h2 className='card__price'>{price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })}</h2>
        
        <h2 className='card__title'>{title}</h2>
      </div>

      <button type='button' className='button__add-cart' onClick={ handleAddCart }>
        <FaCartPlus></FaCartPlus>
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;