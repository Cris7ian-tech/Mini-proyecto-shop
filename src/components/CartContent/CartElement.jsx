import { useContext } from "react";
import { dataContext } from "../../components/Context/DataContext";

import CartItemContent from "./CartItemContent";

import './CartContent.css'

const CartElement = () => {
  const { cart } = useContext(dataContext);
  return cart.map((product) => {
    return (

      <div className="cart-content" key={product.id}>
        <div className="cart-row">
          <div className="info-cart">
            <img src={product.image} alt="image product." />
            <h3 className="name">{product.title}</h3>
            <CartItemContent quanty={product.quanty} />
            <h4 className="price">{product.price} $</h4>
          </div>
        </div>
      </div>
    )
  })    
}


export default CartElement;