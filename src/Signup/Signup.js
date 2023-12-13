import React from 'react' 
import { Outlet, Link } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
   
    // function Credentails (){
    //         let smbt = document.querySelector('.Submit');
    //     smbt.addEventListener('click', ()=>{
    //         let un = document.querySelector('.Username').value;
    //         let eml = document.querySelector('.Email').value;
    //         let pass = document.querySelector('.Password').value;
           
        
    //         let un1 = localStorage.setItem("Username", un)
    //         let eml1 = localStorage.setItem("Email", eml)
    //         let pass1 = localStorage.setItem("Password", pass)
    //         console.log(eml1);
    //     })
    // }

  return (
    <div className='signup_container'>
        <form action="" className='signup_form'>
            <h2>SIGNUP</h2>
            <br />
            <br />
            <input type="text" name="" id='Username' className="Username"  placeholder='USERNAME'/>
            <br />
            <br />
            <br />
            <input type="email" name="" id='Email' className="Email" placeholder='EMAIL'/>
            <br />
            <br />
            <br />
            <input type="password" name="" id='Password' className="Password" placeholder='PASSWORD'/>
            <br />
            <br />
            <button className='Signup'>Signup</button>
        </form>
    </div>
  )
}

export default Signup