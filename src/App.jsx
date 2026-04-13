import { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import CartPage from './pages/CartPage.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />}/>
        <Route path="/product"element={<ProductsPage />}/>
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App