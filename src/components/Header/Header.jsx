import React,{useContext} from 'react';
<<<<<<< HEAD
import cartimg from "./cart-logo.png";
import "./Header.css";
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';
=======
import logo from "./logo.png";
import cartimg from "./cart-logo.png";
import "./Header.css";
import { Link } from 'react-router-dom';
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
import {CartContext} from "../Context/Cart"

function Header() {

  
 const cart = useContext(CartContext)
  return (
     <nav className='header'>
<<<<<<< HEAD
       <Link to="/">
         <div className="header_logo">
           <h1 style={{color: '#ff9800', fontSize: '24px', fontWeight: 'bold', margin: 0}}>
             eKart
           </h1>
         </div>
       </Link>
         <input className ="header_search-box" type='text' ></input>
         <button className='header_search-btn'>Search</button>
         <div className='header_nav_container'>
            <div className='header_link'>
                <SignedOut>
                  <SignInButton>
                    <div className='header_option' style={{cursor: 'pointer'}}>
                      <span className='header-option_line-one'>Hello Guest</span>
                      <span className='header-option_line-two'>Sign In</span>
                    </div>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className='header_option'>
                    <span className='header-option_line-one'>Hello</span>
                    <UserButton />
                  </div>
                </SignedIn>
            </div>
=======
       <Link to="/"><img className="header_logo" src={logo}></img></Link>
         <input className ="header_search-box" type='text' ></input>
         <button className='header_search-btn'>Search</button>
         <div className='header_nav_container'>
            <Link to="/login" className='header_link'>
                <div className='header_option'>
                  <span className='header-option_line-one'>Hello Tushar</span>
                  <span className='header-option_line-two'>Sign In</span>
                </div>
            </Link>
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
            <Link  to="/"className='header_link'>
                <div className='header_option'>
                  <span className='header-option_line-one'>Returns</span>
                  <span className='header-option_line-two'>& Orders</span>
                </div>
            </Link>
            <Link to="" className='header_link'>
            <div className='header_option'>
                  <span className='header-option_line-two'>Prime</span>
                </div>
            </Link>
            <Link to="/checkout"className='header_link'>
            <div className='cart-number'>
                  <span className='header-option_line-two'>{cart.items.length}</span>
                  <img className='header_cart' src={cartimg}></img>
                </div>
            </Link>
         </div>
     </nav>
     
  )
}

export default Header