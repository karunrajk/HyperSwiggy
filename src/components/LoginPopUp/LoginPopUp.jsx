import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { useAuth } from '../../context/AuthContext';

// const LoginPopUp = ({ onClose }) => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [showOTP, setShowOTP] = useState(false);
//     const [otp, setOtp] = useState('');

//     const handlePhoneSubmit = (e) => {
//         e.preventDefault();
//         if (phoneNumber.length === 10) {
//             setShowOTP(true);
//         }
//     };

    const LoginPopUp = ({ onClose, onLoginSuccess }) => {
        const { login } = useAuth();
        const [phoneNumber, setPhoneNumber] = useState('');
        const [showOTP, setShowOTP] = useState(false);
        const [otp, setOtp] = useState('');
    
        const handlePhoneSubmit = (e) => {
            e.preventDefault();
            if (phoneNumber.length === 10) {
                setShowOTP(true);
            }
        };
    
        const handleVerifyOTP = (e) => {
            e.preventDefault();
            console.log('Verifying OTP:', otp);
            login("Karun");  // Use login from AuthContext
            onLoginSuccess();
            onClose();  // Add this line to close the popup
        };
    

    return (
        <div className="login-popup-overlay">
            <div className="login-popup">
                <button className="close-button" onClick={onClose}>
                    ✕
                </button>
                
                <div className="login-content">
                    {!showOTP ? (
                        // Phone Number Screen
                        <>
                            <div className="login-header">
                                <h2>Login</h2>
                                <p>or <span className="create-account">create an account</span></p>
                            </div>

                            <div className="login-illustration">
                                <img src={assets.login_illustration} alt="Login" />
                            </div>

                            <form onSubmit={handlePhoneSubmit}>
                                <div className="phone-input">
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="login-button"
                                    disabled={phoneNumber.length !== 10}
                                >
                                    LOGIN
                                </button>

                                <div className="terms">
                                    <p>
                                        By clicking on Login, I accept the{' '}
                                        <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a>
                                    </p>
                                </div>
                            </form>
                        </>
                    ) : (
                        // OTP Screen
                        <>
                            <div className="login-header">
                                <h2>Enter OTP</h2>
                                <p>We've sent an OTP to your phone number.</p>
                            </div>

                            <div className="login-illustration">
                                <img src={assets.login_illustration} alt="Login" />
                            </div>

                            <div className="phone-display">
                                <span>Phone number</span>
                                <span>{phoneNumber}</span>
                            </div>

                            <form onSubmit={handleVerifyOTP}>
                                <div className="phone-input">
                                    <input 
                                        type="text"
                                        placeholder="One time password"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        maxLength={6}
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="login-button"
                                    disabled={otp.length !== 6}
                                >
                                    VERIFY OTP
                                </button>

                                <div className="terms">
                                    <p>
                                        By clicking on Verify OTP, I accept the{' '}
                                        <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a>
                                    </p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPopUp;