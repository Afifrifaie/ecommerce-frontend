import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext)
    const totalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity)
    }, 0)

    if(cartItems.length === 0) return <p className="cart-empty">Your cart is empty. Start shopping!</p>

    return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.title} />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p className="price">${item.price}</p>
          </div>
          <div className="cart-item-controls">
            <div className="quantity-controls">
              <button disabled={item.quantity === 1} onClick={() => updateQuantity(item.id, -1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️ Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  )
}

export default CartPage