import React,{ useState } from 'react'
import '../App.css'

export default function Signup(props){
  return(
  <form className='form signup' onSubmit={(e)=>e.preventDefault()}>
    <h1 className='heading label-input header'>Signup</h1>
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
    <div className='label-input'>
      <label htmlFor='confirmPassword'>Confirm password</label>
      <input 
      type='password'
      value={props.formData.confirmPassword}
      onChange={props.handleChange}
      id='confirmPassword'
      name='confirmPassword'
      />
    </div>
    
    <button type='submit' className='submitButton'>Signup</button>
    <p className='new-user' onClick={props.handleToggle}> Already a user ? <span className='toggle'>Login</span> </p>
  </form>
  )
}