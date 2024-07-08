import React,{ useState } from 'react'
import './App.css'
import Login from './routes/login.jsx'
import Signup from './routes/Signup.jsx'

const arr = [];
function App() {
  console.log("Hello")
  const [formData,setFormData] = useState({
    email:"",password:"",confirmPassword:""
  })
  console.log(arr)
  const [login,setLogin] = useState(true)
  const [loggedIn,setLoggedIn] = useState(false)

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setFormData(prev => {
      return({
        ...prev,
        [name]:value
    })
    })
  }
  console.log(formData)
  function handleToggle(){
    setFormData({})
    setLogin(!login)
  }
  if (loggedIn) {
    return <SuccessPage />;
  }
  return (
    <div className='Box'>
      {login ? <Signup handleToggle={handleToggle} handleChange={handleChange}
        formData={formData} 
      /> : <Login handleToggle={handleToggle} handleChange={handleChange} formData={formData}  />}
    </div>
  )
}

export default App