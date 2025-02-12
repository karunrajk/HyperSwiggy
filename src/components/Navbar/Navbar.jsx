import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import LoginPopUp from '../LoginPopUp/LoginPopUp'
import {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [showLogin, setShowLogin] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const { isLoggedIn, userName, userLocation } = useAuth();

    const {cartItems, restaurantInfo} = useContext(StoreContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShowCartModal(false);
        navigate('/checkout');
    };

    const handleLoginSuccess = () => {
        login("Karun");
        setShowLogin(false);
    };

    const cartTotal = Object.values(cartItems).reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleHomeClick = () => {
        setMenu("Home");
        navigate('/');
    };

    const handleOffersClick = () => {
        setMenu("Offers");
        navigate('/');
    };

    const handleHelpClick = () => {
        setMenu("Help");
        navigate('/');
    };

    const handleSignInClick = () => {
        setMenu("Sign In");
        navigate('/');
    };

    const handleCartClick = () => {
        setMenu("Cart");
        navigate('/');
    };

    const defaultLocation = {
        type: "Other",
        address: "Bengaluru, Karnataka, India"
    };

    const locationDisplay = isLoggedIn ? userLocation : defaultLocation;

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <svg className="logo" viewBox="0 0 61 61" height="48" width="48">
                    <g clipPath="url(#a)">
                        <path 
                            fill="#FF5200" 
                            d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
                        />
                        <path 
                            fill="#fff" 
                            fillRule="evenodd" 
                            d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z" 
                            clipRule="evenodd"
                        />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M.32.5h60v60h-60z" />
                        </clipPath>
                    </defs>
                </svg>
                <div className='location-selector'>
                    <button className='other-button'>
                        {locationDisplay.type}
                        <span>{locationDisplay.address}</span>
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