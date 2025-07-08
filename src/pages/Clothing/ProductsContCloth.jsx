import React from 'react'
import Products from "../../components/Products/Products"
import "./ProductsContCloth.css"
function ProductsCont() {
  return (
    <div className='content'>
              <div className='products_row'>
              <Products
             id={2}
             title="Levi's Men's 501 Original Straight Fit Jeans" 
             img="https://m.media-amazon.com/images/I/815n97M0D4L._UX466_.jpg"
             price={7000} 
             rating={4} />
          <Products
             id={2}
             title="High Waist Baggy Denim Pants" 
             img="https://m.media-amazon.com/images/I/41u2mWEb0-L._UX569_.jpg"
             price={7000} 
             rating={4} />
          <Products
         id={3}
         title="W for Woman Women Kurta" 
         img="https://m.media-amazon.com/images/I/61V1pZRZFtL._UY550_.jpg"
         price={9000} 
         rating={4} />
          </div>
          <div className='products_row'>
          <Products
             id={1}
             title="Labnoft Men's Auto Lock PU Leather Belt" 
             price={1000} 
             img="https://m.media-amazon.com/images/I/612TIYB295S._UX522_.jpg"
             rating={4} />

          <Products
             id={1}
             title="Oversized Loose Baggy Fit Drop Shoulder Half Sleeves Pure Cotton The Original Anime Graphic Printed T-Shirt for Men" 
             price={600} 
             img="https://m.media-amazon.com/images/I/51DQFn2-ibL._UX569_.jpg"
             rating={4} />
          </div> 
          <div className='products_row'>

           <Products
              id={2}
              title="Oversize Loose Baggy Fit Drop Shoulder Cool and Stylish Latest Believe in You Pocket Print Design Soap Nut Half Sleeve T-Shirt for Men" 
              img="https://m.media-amazon.com/images/I/616qEGfKhOL._UY606_.jpg"
              price={700} 
              rating={4} />
       </div>
    </div>
  )
}

export default ProductsCont