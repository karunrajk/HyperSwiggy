import React, { createContext, useContext, useState } from 'react';
import { food_list, menu_list } from "../assets/assets";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const calculateCartTotals = () => {
        const itemTotal = Object.values(cartItems).reduce((total, item) => total + (item.price * item.quantity), 0);
        const originalPrice = itemTotal;
        const deliveryFee = 40;
        const platformFee = 2;
        const gstAndCharges = Math.round(itemTotal * 0.05);
        const savings = 0;
        const totalAmount = originalPrice + deliveryFee + platformFee + gstAndCharges - savings;

        return {
            itemTotal,
            originalPrice,
            deliveryFee,
            platformFee,
            gstAndCharges,
            savings,
            totalAmount
        };
    };

    const value = {
        cartItems,
        setCartItems,
        restaurantInfo,
        setRestaurantInfo,
        calculateCartTotals,
        food_list,
        menu_list
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
export { StoreContext };
