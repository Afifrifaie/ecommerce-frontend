
//This is the cart page. Its purpose:
// 1. Display the items in the cart
//  1a. Name of the item
//  1b. Price of the item
//  1c. Quantity of the item
//  1d. Total price of the item
// 2. Display the total price of all the items in the cart
// 3. Remove button for each item

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext)

    const totalPrice = cartItems.reduce((accumulator, item)=>{
        return accumulator + (item.price * item.quantity)
    },0)

    if(cartItems.length === 0) return <p>The cart is empty. Please add items to cart.</p>
    return (
        <>
        <h1>Cart</h1>
        {cartItems.map((item)=>{
            return(
            <div key={item.id}>
                <img src={item.images[0]}/>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <div>
                    <p>Quantity:{item.quantity}</p>
                    <button onClick={()=>updateQuantity(item.id, 1)}>➕</button>
                    <button disabled={item.quantity === 1} onClick={()=>updateQuantity(item.id, -1)}>➖</button>
                </div>
                <button onClick={()=>removeFromCart(item.id)}>🗑️ Remove</button>
            </div>
        )
        })}
        <h2>Total:${totalPrice}</h2>
        </>
    )
}

export default CartPage