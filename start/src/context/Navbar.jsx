import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Auth } from './AuthContext'

const Navbar = () => {
    const {isAuth,toggleAuth}=useContext(Auth)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    
    

    const handle=(e)=>{
      let {name,value}=e.target
      if(name==="email1")
      setemail(value)
      else if(name==="password1")
      setpassword(value)
    }

    const setnull=() => {
      setemail("")
     setpassword("")
    }
    
     
    
    

  return (
    <div>
        <input type="email" value={email} name='email1' onChange={handle}/>
        <input type="password" value={password} name='password1' onChange={handle}/>
        <button onClick={()=>{toggleAuth(email,password);setnull();}}>{isAuth.length>0?'Logout':"Login"}</button>
        Token no: {isAuth.length>0?isAuth:0}
    </div>
  )
}

export default Navbar