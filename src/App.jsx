import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import { AuthProvider } from './context/AuthContext'
import StoreContextProvider from './context/StoreContext'

// import {index} from './index.css'

const App = () => {
  return (
    <StoreContextProvider>
      <AuthProvider>
        <div className='App'>
          <Navbar />
          <Routes> 
            <Route path='/' element={<Home />} />
            {/* < Route path='/' element={<RestaurantPage></RestaurantPage>} /> */}

            <Route path='/RestaurantPage/:restaurantName' element={<RestaurantPage />} />
            {/* < Route path='/' element={<Home></Home>} /> */}
            {/* {/* < Route path='/cart' element ={<Cart/>} /> */}
            <Route path='/placeorder' element={<PlaceOrder />} /> 
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/payment' element={<PaymentPage />} />
          
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </StoreContextProvider>
  )
}

export default App
