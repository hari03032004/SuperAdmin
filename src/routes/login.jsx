import React,{ useState } from 'react'
import '../App.css'

function Login(props){

  return(
  <form className='form' onSubmit={(e)=>e.preventDefault()}>
    <div className='header label-input'>
      <h2 className='heading' id="hello">HELLO,</h2>
      <h2 className='heading' id="welcome">WELCOME!</h2>
    </div>
    <div className='label-input header'>
      <label htmlFor='email'>Email Address</label>
      <input 
      type='text'
      value={props.formData.email}
      onChange={props.handleChange}
      id='email'
      name='email'
      />
    </div>
    <div className='label-input'>
      <label htmlFor='password'>Password</label>
      <input 
      type='password'
      value={props.formData.password}
      onChange={props.handleChange}
      id='password'
      name='password'
      />
    </div>
    <div className='label-input '>
      <p className='forget-password' onClick={props.handleToggle}>Forget password? </p>
    </div>
    <button type='submit' className='submitButton' >Login</button>
    <p className='new-user login' onClick={props.handleToggle}> New user ? <span className='toggle'>Sign Up</span> </p>
  </form>
  )
}
export default Login