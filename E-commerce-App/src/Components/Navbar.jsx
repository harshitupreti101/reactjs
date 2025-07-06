import React, { useState,useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'


const Navbar = () => {
    const {getTotalItems} = useContext(ShopContext);
    const [underline,setUnderline] = useState("");
    const underlineHandler = (val) => {
        setUnderline(val);
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {underlineHandler("Shop")}}><Link to='/' style={{textDecoration:'none', color:'#626262'}}>Shop</Link> {underline === "Shop" ? <hr/> : <></> }</li>
            <li onClick={() => {underlineHandler("Men")}}><Link to='/mens' style={{textDecoration:'none', color:'#626262'}}>Men</Link> {underline === "Men" ? <hr/> : <></> }</li>
            <li onClick={() => {underlineHandler("Women")}}><Link to='/womens' style={{textDecoration:'none', color:'#626262'}}>Women</Link> {underline === "Women" ? <hr/> : <></> }</li>
            <li onClick={() => {underlineHandler("Kids")}}><Link to='/kids' style={{textDecoration:'none', color:'#626262'}}>Kids</Link>  {underline === "Kids" ? <hr/> : <></> }</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link to='/login' style={{textDecoration:'none', color:'#626262'}}>Login</Link> </button>
            <Link to='/cart' style={{textDecoration:'none', color:'#626262'}}> <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalItems()}</div>
        </div>
    </div>
  )
}

export default Navbar

