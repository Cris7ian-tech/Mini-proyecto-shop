import { useContext } from "react";
import { dataContext } from "../../components/Context/DataContext";
import './CartContent.css'

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acumulador, elementos) => acumulador + elementos.price, 0);
  return (
    <div className="cart-total">
      <h3>Total a pagar: ${total}</h3>
    </div>
  )
}

export default CartTotal