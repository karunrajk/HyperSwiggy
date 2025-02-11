import React from 'react';
import './PaymentPage.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const PaymentPage = () => {
    const { calculateCartTotals, restaurantInfo } = useContext(StoreContext);
    const { totalAmount } = calculateCartTotals();
    const navigate = useNavigate();

    return (
        <div className="payment-page">
            <div className="payment-header">
                <div className="back-button" onClick={() => navigate(-1)}>←</div>
                <div className="header-content">
                    <h1>Payment Options</h1>
                    <div className="order-info">1 item • Total: ₹{totalAmount}</div>
                </div>
            </div>

            <div className="delivery-info">
                <div className="restaurant-details">
                    <img src={restaurantInfo?.image} alt="" className="restaurant-icon" />
                    <div>
                        <div className="restaurant-name">{restaurantInfo?.name}</div>
                        <div className="delivery-time">Delivery in: 31 mins</div>
                    </div>
                </div>
                <div className="delivery-address">
                    <div className="address-type">Work</div>
                    <div className="address-text">Shell Petrol Pump, Mysore Road, Near Kengeri Metro Station...</div>
                </div>
            </div>

            <div className="payment-offers">
                <img src={assets.offer_icon} alt="" className="offer-icon" />
                <span>Save up to ₹51 more with payment offers</span>
                <span className="arrow">→</span>
            </div>

            <div className="payment-methods-container">
                {/* Preferred Payment */}
                <div className="payment-section">
                    <h2>Preferred Payment</h2>
                    <div className="payment-option">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/upicollect/gpay"} alt="" className="payment-icon" />
                        <div className="payment-details">
                            <span>karun@okhdfc</span>
                        </div>
                        <button className="pay-button">PAY ₹{totalAmount}</button>
                    </div>
                </div>

                {/* UPI Section */}
                <div className="payment-section">
                    <h2>UPI</h2>
                    <div className="payment-option">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/upicollect/gpay"} alt="" className="payment-icon" />
                        <div className="payment-details">
                            <span>Google Pay</span>
                        </div>
                    </div>
                    <div className="add-new-option">
                        <div className="add-icon">+</div>
                        <div className="add-details">
                            <div className="add-title">Add new UPI ID</div>
                            <div className="add-subtitle">You need to have a registered UPI ID</div>
                        </div>
                    </div>
                </div>

                {/* Credit & Debit Cards */}
                <div className="payment-section">
                    <h2>Credit & Debit Cards</h2>
                    <div className="payment-option">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/paymentIcons/cards/mastercard"} alt="" className="payment-icon" />
                        <div className="payment-details">
                            <span>HDFC Bank Card •••• 8285</span>
                        </div>
                    </div>
                    <div className="add-new-option">
                        <div className="add-icon">+</div>
                        <div className="add-details">
                            <div className="add-title">Add New Card</div>
                            <div className="add-subtitle">Save and Pay via Cards</div>
                        </div>
                    </div>
                </div>

                {/* More Payment Options */}
                <div className="payment-section">
                    <h2>More Payment Options</h2>
                    <div className="payment-option">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/instruments/4x/Wallet"} alt="" className="payment-icon" />
                        <div className="payment-details">
                            <span>Wallets</span>
                        </div>
                    </div>
                    <div className="payment-option">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/instruments/4x/Net_banking"} alt="" className="payment-icon" />
                        <div className="payment-details">
                            <span>Netbanking</span>
                        </div>
                    </div>
                    <div className="payment-option">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64/PaymentLogos/instruments/4x/Cash"} alt="" className="payment-icon" />
                        <div className="payment-details">
                            <span>Pay on Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
