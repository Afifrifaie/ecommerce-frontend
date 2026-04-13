import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { CartContext } from '../context/CartContext'

const Navbar = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Le Shop
        </Link>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/product">Products</Link>
          </li>
          <li className="navbar-link">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
