import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Login</Link>
    </nav>
  )
}

export default Nav