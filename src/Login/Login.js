import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className='login_container'>
         <form action="" className='Login_form'>
            <h2>LOGIN</h2>
            <br />
            <br />
            <input type="text" name="" id="Username" placeholder='USERNAME'/>
            <br />
            <br />
            <br />
            <input type="password" name="" id="Password" placeholder='PASSWORD'/>
            <br />
            <br />
            <br />
            <input type="submit" value="LOGIN"  className='Login'/>
        </form>
    </div>
  )
}


export default Login
