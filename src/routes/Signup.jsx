import React,{ useState } from 'react'
import '../App.css'

export default function Signup(props){
  return(
  <form className='form' onSubmit={(e)=>e.preventDefault()}>
    <h1 className='heading'>Signup</h1>
    <label htmlFor='email'>Email</label>
    <input 
      type='text'
      value={props.formData.email}
      onChange={props.handleChange}
      id='email'
      name='email'
    />
    <label htmlFor='password'>New password</label>
    <input 
      type='password'
      value={props.formData.password}
      onChange={props.handleChange}
      id='password'
      name='password'
    />
    <label htmlFor='confirmPassword'>Confirm password</label>
    <input 
      type='password'
      value={props.formData.confirmPassword}
      onChange={props.handleChange}
      id='confirmPassword'
      name='confirmPassword'
    />
    <button type='submit' className='submitButton'>Signup</button>
    <p className='toggle' onClick={props.handleToggle}>Login</p>
  </form>
  )
}