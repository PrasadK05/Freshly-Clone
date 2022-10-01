import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { CartContext } from "./CartContextProvider";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, SetAuth] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const [user, setUser] = useState([]);
  const { setCartData } = useContext(CartContext);

  let loginme = (data) => {
    let flag = false;
    console.log(data.email, data.password);
    let a = user.map((el) => {
      if (el.email == data.email && el.password == data.password) {
        setLoginUser(el);
        flag = true;
        alert("login successful");
        return SetAuth(true);
      }
      // else{
      //   flag=false
      // }
    });
    console.log(flag);
    if (flag == false) {
      console.log(flag);
      // flag=true
      alert("Provide correct login details");
    }
  };

  let logoutme = () => {
    SetAuth(false);
    setCartData([]);
    return setLoginUser({});
  };

  let getData = (data) => {
    setUser(data);
  };
  // console.log(loginUser)
  // console.log(error);
  return (
    <AuthContext.Provider
      value={{ isAuth, loginme, logoutme, getData, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
