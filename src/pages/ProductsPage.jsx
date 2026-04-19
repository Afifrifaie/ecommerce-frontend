import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setProducts(data.products) 
        setIsLoading(false)
    }

    getProducts()
    }, [])

    useEffect(()=>{
        const getCategories = async () => {
            const res = await fetch('https://dummyjson.com/products/categories')
            const data = await res.json()
            setCategories(data)
        }
        getCategories()
    },[])

    const filteredProducts = products.filter((product)=>{
    const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true

    return matchesSearch && matchesCategory
    })

    return (
        <div className="products-page">
            <h1>Products</h1>
            <div className="filters">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map(category =>(
                        <option key={category.slug} value={category.slug}>{category.name}</option>
                        ))}
                </select>
            </div>
            {isLoading ? (<div className="loading">Loading products...</div>) :(
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </Link>
                ))}
            </div>
            )}
        </div>
    )
}

export default ProductsPage