import { useState, createContext } from "react";

export const CartContext = createContext()


const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
    setCartItems(prevItems => {
        const itemExists = prevItems.find(item => item.id === product.id)
        if(itemExists){
            return prevItems.map(item => 
                item.id === product.id 
                ? {...item, quantity: item.quantity + 1} 
                : item
            )
        } else {
            return [...prevItems, {...product, quantity: 1}]
        }
    })
}

    const removeFromCart = (id) =>{
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const updateQuantity = (id, change) =>{
        setCartItems(prevItems=> 
            prevItems.map(item => 
                item.id === id
                ?{...item, quantity: item.quantity + change}
                :item))
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider