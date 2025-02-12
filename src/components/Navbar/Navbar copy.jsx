import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import LoginPopUp from '../LoginPopUp/LoginPopUp'
import {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const userName = "Karun";

    const {cartItems, restaurantInfo} = useContext (StoreContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShowCartModal(false);
        navigate('/checkout');
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
    };
    // const cartItems = [
    //   {
    //       name: "The Muscle Multiplier",
    //       quantity: 2,
    //       price: 200,
    //   }
    // ];
    // const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const cartTotal = Object.values(cartItems).reduce((total, item) => total + (item.price * item.quantity), 0);
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={assets.Swiggy_logo} alt="Swiggy" className='logo' />
                <div className='location-selector'>
                    <button className='other-button'>
                        WORK
                        <span>BSM Extension, Kengeri Satellite To...</span>
                        <span className='dropdown-arrow'>▼</span>
                    </button>
                </div>
            </div>

            <div className='navbar-right'>
                <div className='nav-item'>
                    <img src={assets.corporate_icon} alt="" />
                    <span>Swiggy Corporate</span>
                </div>
                
                <div className='nav-item'>
                    <img src={assets.search_icon} alt="" />
                    <span>Search</span>
                </div>
                
                <div className='nav-item'>
                    <img src={assets.offers_icon} alt="" />
                    <span>Offers</span>
                    <span className='new-tag'>NEW</span>
                </div>
                
                <div className='nav-item'>
                    <img src={assets.help_icon} alt="" />
                    <span>Help</span>
                </div>
                
                <div className='nav-item' onClick={() => !isLoggedIn && setShowLogin(true)}>
                    <img src={assets.profile_icon} alt="" />
                    <span>{isLoggedIn ? userName : 'Sign In'}</span>
                </div>
                
                <div 
                    className='nav-item cart'
                    onClick={() => setShowCartModal(!showCartModal)}
                >
                    <img src={assets.basket_icon} alt="" />
                    <span>Cart</span>
                    {Object.keys(cartItems).length > 0 && (
                        <div className='cart-count'>{Object.keys(cartItems).length}</div>
                    )}

                    {showCartModal && Object.keys(cartItems).length > 0 && (
                        <div 
                            className='cart-modal'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='cart-modal-header'>
                                <img 
                                    src={restaurantInfo?.image} 
                                    alt="Restaurant" 
                                    className='restaurant-image' 
                                />
                                <div className='restaurant-info'>
                                    <h3>FreshMenu</h3>
                                    <p>Rajarajeshwari Nagar</p>
                                    <a href="#" className='view-menu'>VIEW FULL MENU</a>
                                </div>
                            </div>
                            
                            <div className='cart-items'>
                                {Object.values(cartItems).map((item) => (
                                    <div key={item.id} className='cart-item'>
                                        <div className='item-name'>
                                            {item.name} × {item.quantity}
                                        </div>
                                        <div className='item-price'>
                                            ₹{item.price * item.quantity}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='cart-footer'>
                                <div className='subtotal'>
                                    <span>Sub total</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <p className='extra-charges'>Extra charges may apply</p>
                                <button 
                                    className='checkout-btn'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCheckout();
                                    }}
                                >
                                    CHECKOUT
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showLogin && <LoginPopUp onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}
        </div>
    )
}

export default Navbar