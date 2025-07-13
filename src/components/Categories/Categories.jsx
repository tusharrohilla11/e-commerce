import React from 'react'
import "./Categories.css"
import {Link} from "react-router-dom"

function Categories() {
  return (
    <div className='categories'>
        <h1>Categories</h1>
        <Link to="/sports"><button className='cat_btn'>Sports</button></Link>
        <Link to="/electronics"><button className='cat_btn'>Electronics</button></Link>
        <Link to="/clothing"><button className='cat_btn'>Clothing</button></Link>
        <Link to="/furniture"><button className='cat_btn'>Furniture</button></Link>
        <Link to="/groceries"><button className='cat_btn'>Groceries</button></Link>
        <Link to="/books"><button className='cat_btn'>Books</button></Link>
        <Link to="/giftcard"><button className='cat_btn'>Gift Cards</button></Link>
    </div>
  )
}

export default Categories