import React from 'react'
import Products from "../../components/Products/Products"
import "./ProductsContElec.css"
function ProductsCont() {
  return (
    <div className='content'>
              <div className='products_row'>
          <Products
             id={1}
             title="Apple AirPods (2nd Generation)" 
             price={12000} 
             img="https://m.media-amazon.com/images/I/71NTi82uBEL._SX522_.jpg"
             rating={4} />
          <Products
             id={2}
             title="Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)
             " 
             img="https://m.media-amazon.com/images/I/61RZDb2mQxL._SX679_.jpg"
             price={75000} 
             rating={4} />
          <Products
         id={3}
         title="Razer Blackwidow V3 Tenkeyless - Mechanical Gaming Keyboard" 
         img="https://m.media-amazon.com/images/I/61W6IF8fimL._SX450_.jpg"
         price={7000} 
         rating={4} />
          </div>
          <div className='products_row'>

          <Products
             id={2}
             title="Amazon Basics Fast Charging Braided Type C" 
             img="https://m.media-amazon.com/images/I/71ALvj4-D6L._SX425_.jpg"
             price={700} 
             rating={4} />
          <Products
             id={1}
             title=" USB C Docking Station for Laptop," 
             price={4000} 
             img="https://m.media-amazon.com/images/I/61PzmJQpDwL._SY550_.jpg"
             rating={4} />
          </div> 
          <div className='products_row'>

           <Products
              id={2}
              title="Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Grey" 
              img="https://m.media-amazon.com/images/I/61Ph34V0YAL._SX522_.jpg"
              price={200000} 
              rating={4} />
       </div>
    </div>
  )
}

export default ProductsCont