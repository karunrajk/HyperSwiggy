import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="app-download">
                <h2>For better experience,download the Swiggy app now</h2>
                <div className="app-stores">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"} alt="Get it on Google Play" />
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"} alt="Download on the App Store" />
                </div>
            </div>
            
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={assets.Swiggy_logo} alt="Swiggy" />
                    <p>© 2024 Swiggy Limited</p>
                </div>

                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Swiggy Corporate</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Swiggy One</a></li>
                        <li><a href="#">Swiggy Instamart</a></li>
                        <li><a href="#">Swiggy Dineout</a></li>
                        <li><a href="#">Swiggy Genie</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact us</h3>
                    <ul>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Partner with us</a></li>
                        <li><a href="#">Ride with us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Investor Relations</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Available in:</h3>
                    <ul>
                        <li><a href="#">Bangalore</a></li>
                        <li><a href="#">Gurgaon</a></li>
                        <li><a href="#">Hyderabad</a></li>
                        <li><a href="#">Delhi</a></li>
                        <li><a href="#">Mumbai</a></li>
                        <li><a href="#">Pune</a></li>
                        <select className="cities-dropdown">
                            <option>679 cities</option>
                        </select>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Life at Swiggy</h3>
                    <ul>
                        <li><a href="#">Explore with Swiggy</a></li>
                        <li><a href="#">Swiggy News</a></li>
                        <li><a href="#">Snackables</a></li>
                    </ul>
                </div>

                <div className="footer-section social-links">
                    <h3>Social Links</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;