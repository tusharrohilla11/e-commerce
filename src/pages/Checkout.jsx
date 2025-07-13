<<<<<<< HEAD
import React ,{useContext, useState} from 'react'
import {CartContext} from "../components/Context/Cart"
import StripeCheckout from "../components/StripeCheckout"
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
=======
import React ,{useContext} from 'react'
import {CartContext} from "../components/Context/Cart"
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
import "./CheckoutCard.css" 
import {Link} from "react-router-dom"

function Checkout() {

<<<<<<< HEAD
  const cart = useContext(CartContext)
  const [showPayment, setShowPayment] = useState(false)
  const totalAmount = cart.items.reduce((a,b)=>a+b.price,0)
=======
  const cart =useContext(CartContext)
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4

  function remove_btn(id){
    const newupdatedItems =cart.items.filter((taskname,i)=>{
      return id !== i;
  })
    cart.setItems(newupdatedItems);
  }

<<<<<<< HEAD
  const handlePaymentSuccess = () => {
    cart.setItems([]) // Clear cart after successful payment
    setShowPayment(false)
  }

=======
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
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
<<<<<<< HEAD
              <div className='img_content' key={id}>

               <img className="img_size" src={item.img} alt='hh'></img>
=======
              <div className='img_content'>

               <img key={id} className="img_size" src={item.img} alt='hh'></img>
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
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
<<<<<<< HEAD
     <h2>Total : ₹{totalAmount}</h2>
     
     <SignedOut>
       <div style={{ textAlign: 'center', padding: '20px' }}>
         <p style={{ marginBottom: '15px', fontSize: '16px' }}>
           Please sign in to proceed with checkout
         </p>
         <SignInButton>
           <button className='remove_btn'>Sign In to Checkout</button>
         </SignInButton>
       </div>
     </SignedOut>

     <SignedIn>
       {!showPayment ? (
         <button 
           className='remove_btn' 
           onClick={() => setShowPayment(true)}
           disabled={cart.items.length === 0}
         >
           Proceed to checkout
         </button>
       ) : (
         <div style={{ marginTop: '20px' }}>
           <StripeCheckout 
             amount={totalAmount} 
             onSuccess={handlePaymentSuccess}
           />
           <button 
             onClick={() => setShowPayment(false)}
             style={{
               marginTop: '10px',
               padding: '8px 16px',
               backgroundColor: '#6c757d',
               color: 'white',
               border: 'none',
               borderRadius: '4px',
               cursor: 'pointer'
             }}
           >
             Back to Cart
           </button>
         </div>
       )}
     </SignedIn>
=======
     <h2>Total : ₹{cart.items.reduce((a,b)=>a+b.price,0)}</h2>
     <button className='remove_btn' >Proceed to checkout</button>
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
     </div>
    </div>
  )
}

export default Checkout