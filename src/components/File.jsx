import React, { useState } from 'react'

function File() {
    const[login,setLogin] = useState(false)

    const handleClick = () => {
        setLogin(!login)
    }
   
  return (
    <div className='container'>
        <header className='head'>
            <span className='nav'>
            <h2 >User Details</h2>
            <button onClick={ handleClick } className='btn'>{login=== true ? "LogOut👋" :"LogIn🙌" }</button>
            </span>

        </header>
        {
            login===false ?  <User/> : <Guest/>
        }
        
    </div>
  )
  function Guest (){
    return (
        <h2>Welcome John 🎉🎉</h2>
    )
  }
  function User (){
    return (
        <h2>Please Login</h2>
    )
  }
}

export default File