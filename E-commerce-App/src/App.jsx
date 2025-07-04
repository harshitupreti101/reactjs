import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx'
import Product from './Pages/Product.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
            <Route path='/mens' element={<ShopCategory category="mens"/>}></Route>
            <Route path='/womens' element={<ShopCategory category="womens"/>}></Route>
            <Route path='/loginSignUp' element={<LoginSignUp/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/product/:productId' element={<Product />} />

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App