import { useContext } from "react";
import { dataContext } from "../../components/Context/DataContext";
import "./products.css"

const Products = () => {
const { data, cart, setCart } = useContext(dataContext);

const buyProduct = (product) => {
  const productrepeat = cart.find((item) => item.id === product.id)

  if (productrepeat) {
    setCart(cart.map((item) => item.id === product.id ? { ...product, quanty: product.quanty + 1 } : item))
      
    }else {
      setCart([...cart, product])
      // console.log(product)
      
    }
  };

  return data.map((product) => {
    return(

    <div className="products-card-container" key={product.id}>
      <div className="card-row">       
        <div className="info-card">
        <img src={product.image}  alt="image product."/>
        <h3>{product.title}</h3>
        <h4>${product.price}$</h4>
        <a className="buy-button" onClick={() => buyProduct(product)}>Buy</a>
        </div>      
      </div>
    </div>
  )

})
}

export default Products;