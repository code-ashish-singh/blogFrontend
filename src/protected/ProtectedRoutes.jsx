import React from 'react'
import { useState } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate()

    var data  = localstorage.getItem("user")
    if(data) {

        const [isLogin,setLogin] = useState(true)
    }
    else{
        const [isLogin,setLogin] = useState(false)

    }
    if(!isLogin){
        
        return  <Navigate to='/signup' replace = {true}/>
    }
    
  return children
}

export default ProtectedRoutes