import { useContext } from "react";
import { dataContext } from "../../components/Context/DataContext";

import CartElement from "./CartElement";
import CartTotal from "./CartTotal";


const CartContent = () => {
  const { cart } = useContext(dataContext);
  //condicion ? true : false



  return cart.length > 0 ? (
  <>  
    <CartElement />
    <CartTotal />
  </>
  ) : (
    <h2 className="cart-mensaje">Tu Carrito se encuentra vacío.</h2>
  )
};

export default CartContent