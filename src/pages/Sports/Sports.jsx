import React from 'react'
import  banner  from "../../components/Banner/banner-sports.png"
import "./Sports.css";
import ProductsCont from './ProductsContSports';
import Categories from '../../components/Categories/Categories';
import {useEffect} from 'react'

function Sports() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return  (
    <div className='Home-upper'>
      <Categories/>
      <div className='Home'>
        <img className='home-banner' src={banner} alt='hh'></img>
        <ProductsCont/>
      </div>
    </div>
  )
}

export default Sports