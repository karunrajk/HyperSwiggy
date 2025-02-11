// import React from 'react'
// import './Header.css'


// const Header = () => {
//   return (
//     <div className='Header'>
//         <div className='Header-contents'>
//                 <h2> Pizza Hut</h2>
//                 <div className='HeaderDetails'>
//                     <p>3.8 Ratings * 800 for two</p>
//                     <div className='HeaderTag>'><p>Italian</p></div>
//                     <p>Kalyan Nagar Outlet</p>
//                     {/* <button> View Menu</button> */}
//                 </div>
//                 <h2> Deals for You</h2>
//                 <div className='Deals'>

//                 </div>


//         </div>
      
//     </div>
//   )
// }

// export default Header


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Left section */}
        <div className="header-left">
          <Link to="/" className="logo-container">
            <img src={assets.Swiggy_logo} alt="Swiggy" className="logo" />
          </Link>
          <div className="location-selector">
            <button className="other-button">
              Other
              <span className="dropdown-arrow">▼</span>
            </button>
          </div>
        </div>

        {/* Right section */}
        <nav className="header-nav">
          <Link to="/corporate" className="nav-item">
            <img src={assets.bag_icon} alt="Corporate" className="nav-icon" />
            <span>Swiggy Corporate</span>
          </Link>
          <Link to="/search" className="nav-item">
            <img src={assets.search_icon} alt="Search" className="nav-icon" />
            <span>Search</span>
          </Link>
          <Link to="/offers" className="nav-item">
            <img src={assets.selector_icon} alt="Offers" className="nav-icon" />
            <span>Offers</span>
            <span className="new-tag">NEW</span>
          </Link>
          <Link to="/help" className="nav-item">
            <img src={assets.profile_icon} alt="Help" className="nav-icon" />
            <span>Help</span>
          </Link>
          {/* <Link to="/signin" className="nav-item">
            <img src={assets.profile_icon} alt="Sign In" className="nav-icon" />
            <span>Sign In</span>
          </Link> */}
          <Link to="/cart" className="nav-item cart">
            <img src={assets.basket_icon} alt="Cart" className="nav-icon" />
            <span>Cart</span>
            <span className="cart-count">0</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;