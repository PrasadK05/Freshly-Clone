import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();



export default function AuthContextProvider({ children }) {
  const [isAuth, SetAuth] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const [user , setUser]= useState([])
  

  let loginme = (data) => {
    let a = user.map((el) => {
      if (el.email == data.email && el.password == data.password) {
        setLoginUser(el);
        return SetAuth(true);
      } 
    });
    
  };

  let logoutme = () => {
    SetAuth(false);
    return setLoginUser({});
  };

  let getData=(data)=>{
    setUser(data)
  }
  // console.log(loginUser)
  // console.log(error);
  return (
    <AuthContext.Provider value={{ isAuth, loginme, logoutme, getData, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}
