import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [subTotal, setTotal] = useState(0);
  const [loading, setLoading]= useState(true)

  let cartFunc = (data) => {
    let m = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      image: data.image,
    };
    setCartData([...cartData, m]);
  };
  
  let getData = (val) => {
    setLoading(false)
    axios
      .get("https://safe-beach-98644.herokuapp.com/" + val)
      .then((res) => setFoods(res.data))
      .catch((error) => console.log(error));
      setLoading(true)
  };

  // if(cartData.length!=0){
  useEffect(() => {
    let a = cartData.reduce((acc, el) => {
      return acc + el.price;
    }, 0);

    setTotal(a);
  }, [cartData]);
  // }

  let delCart = (id) => {
    let d = cartData.filter((el) => {
      return id != el.id;
    });

    setCartData(d);
  };

  let clearAll = () => {
    setCartData([]);
  };
  return (
    <CartContext.Provider
      value={{
        getData,
        foods,
        cartFunc,
        cartData,
        subTotal,
        delCart,
        clearAll,
        loading,
        setCartData
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
