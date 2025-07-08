import React ,{useContext}from 'react'
import "./Products.css"
import {CartContext} from "../Context/Cart"

function Products(props) {

  const cart = useContext(CartContext)
   console.log("Cart", cart)

    function addToCart() {
        cart.setItems([
          ...cart.items,
        {
         title :props.title,
         img : props.img,
         price :props.price
        }
       ])
      
   }

  return (
    <div className='products'>
        <p className='title'>{props.title}</p> 
        <img className='img_size' src={props.img}></img>
        <p className='product_price'>
            <small>₹</small>
            <strong>{props.price}</strong>
        </p>
        <button onClick={addToCart} className='basketbtn'>Add To Basket</button>

    </div>
  )
}

export default Products