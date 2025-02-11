import React, { useContext, useState } from 'react';
import './CheckoutPage.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import LoginPopUp from '../../components/LoginPopUp/LoginPopUp';

const CheckoutPage = () => {
    const { 
        cartItems, 
        restaurantInfo,
        calculateCartTotals
    } = useContext(StoreContext);

    const {
        itemTotal,
        originalPrice,
        deliveryFee,
        platformFee,
        gstAndCharges,
        savings,
        totalAmount
    } = calculateCartTotals();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isAddressSelected, setIsAddressSelected] = useState(false);
    
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    const handleDeliverHere = () => {
        setIsAddressSelected(true);
    };

    const handleProceedToPay = () => {
        navigate('/payment');
    };

    return (
        <div className="checkout-container">
            {/* <div className="checkout-header">
                <div className="header-left">
                    <img src={assets.Swiggy_logo} alt="Swiggy" className="checkout-logo" />
                    <span className="secure-text">SECURE CHECKOUT</span>
                </div>
                <div className="header-right">
                    <button className="help-btn">
                        <img src={assets.help_icon} alt="Help" />
                        Help
                    </button>
                    <div className="user-profile">Karun</div>
                </div>
            </div> */}

            <div className="checkout-content">
                <div className="left-section">
                    <div className="delivery-section">
                        <div className="address-icon">
                            <img src={assets.location_icon} alt="Location" />
                        </div>
                        <h2>Delivery address</h2>
                        <p className="address">
                            Shell Petrol Pump, BSM Extension, Kengeri Satellite Town, Bengaluru,
                            Karnataka 560060, India
                        </p>
                        <div className="delivery-time">21 MINS</div>
                        <div className="address-card">
                            {!isLoggedIn ? (
                                <div className="login-prompt">
                                    <h3>Have an account?</h3>
                                    <button className="login-btn" onClick={handleLoginClick}>
                                        LOG IN
                                    </button>
                                </div>
                            ) : (
                                <button className="deliver-here-btn" onClick={handleDeliverHere}>
                                    DELIVER HERE
                                </button>
                            )}
                        </div>
                    </div>

                    {isAddressSelected && (
                        <div className="payment-method-section">
                            <div className="payment-icon">
                                <img src={assets.wallet_icon} alt="Payment" />
                            </div>
                            <h2>Choose payment method</h2>
                            <div className="payment-button-container">
                                <button className="proceed-to-pay-btn" onClick={handleProceedToPay}>
                                    PROCEED TO PAY
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="right-section">
                    <div className="order-details">
                        <div className="restaurant-header">
                            <div className="restaurant-info">
                                <img 
                                    src={restaurantInfo?.image} 
                                    alt="Restaurant" 
                                    className="restaurant-image"
                                />
                                <div className="restaurant-details">
                                    <h3>{restaurantInfo?.name}</h3>
                                    <p>{restaurantInfo?.location}</p>
                                </div>
                            </div>
                            
                            <div className="menu-items">
                                {Object.values(cartItems).map((item) => (
                                    <div key={item.id} className="menu-item">
                                        <div className="item-info">
                                            <span className="veg-icon">⬛</span>
                                            <span className="item-name">{item.name}</span>
                                        </div>
                                        <div className="quantity-price">
                                            <div className="quantity-controls">
                                                <button>−</button>
                                                <span>{item.quantity}</span>
                                                <button>+</button>
                                            </div>
                                            <div className="price-info">
                                                <span className="original-price">₹{item.originalPrice * item.quantity}</span>
                                                <span className="final-price">₹{item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="suggestions-box">
                            <span>"</span>
                            <span>Any suggestions? We will pass it on...</span>
                        </div>

                        <div className="no-contact-delivery">
                            <input type="checkbox" />
                            <div>
                                <h4>Opt in for No-contact Delivery</h4>
                                <p>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</p>
                            </div>
                        </div>

                        <div className="apply-coupon">
                            <span className="coupon-icon">%</span>
                            <span>Apply Coupon</span>
                        </div>

                        <div className="bill-details">
                            <h3>Bill Details</h3>
                            <div className="bill-item">
                                <span>Item Total</span>
                                <span>₹{itemTotal}</span>
                            </div>
                            <div className="bill-item">
                                <span>Delivery Fee | 8.8 kms</span>
                                <span>₹{deliveryFee}</span>
                            </div>
                            <div className="bill-item">
                                <span>Platform fee</span>
                                <span>₹{platformFee}</span>
                            </div>
                            <div className="bill-item">
                                <span>GST and Restaurant Charges</span>
                                <span>₹{gstAndCharges}</span>
                            </div>
                            <div className="to-pay">
                                <span>TO PAY</span>
                                <span>₹{totalAmount}</span>
                            </div>
                        </div>
                    </div>
                    <div className="savings-box">
                        Savings of ₹298
                    </div>
                    <div className="review-box">
                        <h4>Review your order and address details to avoid cancellations</h4>
                        <p>Note: Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.</p>
                        <a href="#" className="read-policy">Read policy</a>
                    </div>
                </div>
            </div>

            {showLogin && (
                <LoginPopUp 
                    onClose={() => setShowLogin(false)} 
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
        </div>
    );
};

export default CheckoutPage;

