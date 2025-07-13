import React from 'react'
import Products from "../components/Products/Products"
import "./ProductsCont.css"
function ProductsCont() {
  return (
    <div className='content'>
              <div className='products_row'>
          <Products
             id={1}
             title="The Ikigai Journey : A Practical Guide" 
             price={400} 
             img="https://m.media-amazon.com/images/I/514YEGUZiNL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
             rating={4} />
          <Products
             id={2}
             title="Nike Spark Women's Shoes" 
             img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-shoes-zPVQHZ.png"
             price={700} 
             rating={4} />
          <Products
             id={1}
             title="Organic Cotton Core Logo Graphic Hoodie" 
             price={400} 
             img="https://image1.superdry.com/static/images/optimised/zoom/upload9223368955666135814.jpg"
             rating={4} />
          </div>
          <div className='products_row'>

          <Products
             id={2}
             title="Apple Watch SE" 
             img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-40-alum-starlight-nc-se_VW_34FR_WF_CO_GEO_IN?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713"
             price={700} 
             rating={4} />
          <Products
             id={1}
             title="Galaxy A73 5G" 
             price={400} 
             img="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a73/buy/A73_Black.png?imwidth=480"
             rating={4} />
          </div> 
          <div className='products_row'>

           <Products
              id={2}
              title="Brown Men Messenger Bag - Medium" 
              img="https://rukminim2.flixcart.com/image/832/832/kt0enww0/sling-bag/f/l/m/topgrain-vegan-leather-stylish-sling-bag-for-men-side-bag-for-original-imag6g5d3fpmzxds.jpeg?q=70"
              price={700} 
              rating={4} />
       </div>
    </div>
  )
}

export default ProductsCont