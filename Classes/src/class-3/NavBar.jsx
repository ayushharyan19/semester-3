import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav'>
        <Link to={'/'}> 
        <span>Home</span>
        </Link>
        <Link to={'/about'}>  
        <span>About</span>
        </Link>
        <span>Contact Us</span>


    </div>
  )
}

export default NavBar