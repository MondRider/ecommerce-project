import React, { useState, useEffect, useContext } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import AppContext from '../../context/AppContext';

function Products() {
  
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('').then((response) =>{
      setProducts(response);
    });
  }, []);


  return ( 
    <section className='products container'>

      {
        products.map((product) => <ProductCard key={product.id} data={ product } />)
      }

    </section>
  );
}

export default Products;