import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  //armamos el carrito
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("data.json")
      .then((respuesta) => setData(respuesta.data))
  }, [])

  return (
    <dataContext.Provider value={{ data, cart, setCart }}>{children}</dataContext.Provider>
  )
}


export default DataProvider;               