import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContextProvider'

export default function PrivateRoutes({children}) {
    const{isAuth}=useContext(AuthContext)

if(isAuth==false){
    return <Navigate to="/login"/>
}

  return children
}
