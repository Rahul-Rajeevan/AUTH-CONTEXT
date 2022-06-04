import axios from 'axios'
import { useState } from "react";
import { createContext } from "react";
export const Auth=createContext();
export const AuthContextProvider=({children})=>{
    
    const [isAuth, setisAuth] = useState(false)
    const toggleAuth=async(email,password)=>{
       let r= await axios.post(`https://reqres.in/api/login`,{email:email,password:password})     
        if(r!=0)
        setisAuth(r.data.token)
        else
        setisAuth(0)
       }
    
    return <Auth.Provider value={{toggleAuth,isAuth}}>{children}</Auth.Provider>}