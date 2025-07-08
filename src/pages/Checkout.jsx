import React ,{useContext} from 'react'
import {CartContext} from "../components/Context/Cart"
import "./CheckoutCard.css" 
import {Link} from "react-router-dom"

function Checkout() {

  const cart =useContext(CartContext)

  function remove_btn(id){
    const newupdatedItems =cart.items.filter((taskname,i)=>{
      return id !== i;
  })
    cart.setItems(newupdatedItems);
  }

  return (
    <div className='checkout'>
      <div className='op'>
         <h1>Your Shopping Cart</h1>
       {

        <div className='card'>


             {
              cart.items.length===0?<h1>Your cart is Empty  <Link to="/"
               style={{color:"orange",
               textDecoration:"none",
               fontSize:"20px"}}>Go Shopping</Link> </h1>:

             cart.items.map((item,id) => (
              <div className='img_content'>

               <img key={id} className="img_size" src={item.img} alt='hh'></img>
               <div className='content_content'>
               <h1  className='title'>{item.title}   </h1>
               <h1  className='title'>Price : ₹{item.price}   </h1>
               <div className='remove'>
                <button onClick={()=>remove_btn(id)} className='remove_btn'>Remove</button>
                </div>               

               </div>

               </div>
               
               ))
              }
         </div>
       }           </div>
 
    <div className='proceed_checkout'>
     <h2>Total : ₹{cart.items.reduce((a,b)=>a+b.price,0)}</h2>
     <button className='remove_btn' >Proceed to checkout</button>
     </div>
    </div>
  )
}

export default Checkout