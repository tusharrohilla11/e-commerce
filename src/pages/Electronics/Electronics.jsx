import React from 'react'
import  banner  from "../../components/Banner/banner-elec.jpeg"
import "./Electronics.css";
import ProductsCont from './ProductsContElec';
import Categories from '../../components/Categories/Categories';
import { useEffect } from 'react';

function Electronics() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='Home-upper'>
      <Categories/>
      <div className='Home'>
        <img className='home-banner3' src={banner} alt='hh'></img>
        <ProductsCont/>
      </div>
    </div> 
   )
}

export default Electronics