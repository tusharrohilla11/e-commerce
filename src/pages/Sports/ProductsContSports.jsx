import React from 'react'
import Products from "../../components/Products/Products"
import "./ProductsContSports.css"
function ProductsCont() {
  return (
    <div className='content'>
              <div className='products_row'>
          <Products
             id={1}
             title="Adidas Football " 
             price={3000} 
             img="https://m.media-amazon.com/images/I/41VQlsVdzbL._SY300_SX300_QL70_FMwebp_.jpg"
             rating={4} />
          <Products
             id={2}
             title="Football Jersey Man_Untd" 
             img="https://m.media-amazon.com/images/I/51VZ3gYE7IL._UX569_.jpg"
             price={1700} 
             rating={4} />
          <Products
         id={3}
         title="Nike Spark Women's Shoes" 
         img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-shoes-zPVQHZ.png"
         price={7000} 
         rating={4} />
          </div>
          <div className='products_row'>

          <Products
             id={2}
             title="Nike Swoosh Wristbands" 
             img="https://m.media-amazon.com/images/I/51hcTjemFWL._SX300_SY300_QL70_FMwebp_.jpg"
             price={700} 
             rating={4} />
          <Products
             id={1}
             title=" Sun Visor Hats Empty Top Baseball Cap Running Tennis Hats " 
             price={400} 
             img="https://m.media-amazon.com/images/I/417JO8JvPHL._UX679_.jpg"
             rating={4} />
          </div> 
          <div className='products_row'>

           <Products
              id={2}
              title="NIVIA Basic Duffle Polyester Bag" 
              img="https://m.media-amazon.com/images/I/715ZPfba2rL._SX425_.jpg"
              price={2000} 
              rating={4} />
       </div>
    </div>
  )
}

export default ProductsCont