import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Signup from './../Signup/Signup';
import Login from './../Login/Login';
import Home from '../Home/Home';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="home">
            <Link to="/" className='home_link'>Home</Link>
        </div>
        <div className="credentials">
        <Link to="/Signup"className='credentails_link'>Signup</Link> 
        <Link to="/Login" className='credentails_link'>Login</Link>
        </div>
        
        


    </div>
  )
}

export default Navbar