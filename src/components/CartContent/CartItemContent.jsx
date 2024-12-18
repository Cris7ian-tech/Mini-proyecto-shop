

const CartItemContent = ({ quanty }) => {
  return (
    <>
    CartItemContent
    <p className="counter-button" style={{color: 'black'}}>-</p>
    <p className="counter-button" style={{color: 'black'}}>{quanty}</p>
    <p className="counter-button" style={{color: 'black'}}>+</p>
    </>
  )
}

export default CartItemContent;