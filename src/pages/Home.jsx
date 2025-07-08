import React from 'react'
import  banner  from "../components/Banner/banner.jpg"
import "./Home.css"
import ProductsCont from '../components/ProductsCont';
import Categories from '../components/Categories/Categories';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='Home-upper'>
      <Categories/>
      <div className='Home'>
        <img className='home-banner1' src={banner} alt='hh'></img>
        <ProductsCont/>
      </div>
    </div>
  )
}

export default Home