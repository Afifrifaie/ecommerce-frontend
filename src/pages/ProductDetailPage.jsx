import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"

import { CartContext } from "../context/CartContext"



const ProductDetailPage = () => {
    const [product, setProduct] = useState(null)
    const { id } =useParams()
    const { addToCart } = useContext(CartContext)

    useEffect(()=>{
        const getProduct = async()=>{
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        }
        getProduct()
    },[id])

    if(!product) return <p>Loading...</p>

    return(
        <div className="product-detail">
            <img src={product.images[0]} alt={product.title}/>
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={()=>{addToCart(product)}}>Add to cart</button>
        </div>
    )
}

export default ProductDetailPage