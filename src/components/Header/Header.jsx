import React,{useContext} from 'react';
import logo from "./logo.png";
import cartimg from "./cart-logo.png";
import "./Header.css";
import { Link } from 'react-router-dom';
import {CartContext} from "../Context/Cart"

function Header() {

  
 const cart = useContext(CartContext)
  return (
     <nav className='header'>
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