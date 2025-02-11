import { createContext, useState, useEffect } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItem] = useState({});
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    // Calculate all cart-related values
    const calculateCartTotals = () => {
        const itemTotal = Object.values(cartItems).reduce((total, item) => 
            total + (item.price * item.quantity), 0);
        
        const originalPrice = Object.values(cartItems).reduce((total, item) => 
            total + (item.originalPrice || item.price * 2) * item.quantity, 0);
        
        // Calculate fees based on cart value
        const deliveryFee = Math.round(itemTotal * 0.05); // 5% of item total
        const platformFee = 10; // Fixed platform fee
        const gstAndCharges = Math.round(itemTotal * 0.18); // 18% GST
        const savings = originalPrice - itemTotal;
        const totalAmount = itemTotal + deliveryFee + platformFee + gstAndCharges;

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

    const addToCart = (itemId) => {
        const item = food_list.find((item) => item._id === itemId);
        
        if (Object.keys(cartItems).length === 0) {
            // Find the restaurant info from menu_list using item.category
            const restaurant = menu_list.find(menu => menu.menu_name === item.category);
            
            setRestaurantInfo({
                name: restaurant?.menu_name || item.category,
                image: restaurant?.menu_image, // Use menu_image from menu_list
                location: "Rajarajeshwari Nagar"
            });
        }

        setCartItem((prev) => {
            if (!prev[itemId]) {
                return {
                    ...prev,
                    [itemId]: {
                        id: itemId,
                        name: item.name,
                        price: item.price,
                        originalPrice: item.originalPrice || item.price * 2,
                        quantity: 1
                    }
                };
            }
            return {
                ...prev,
                [itemId]: {
                    ...prev[itemId],
                    quantity: prev[itemId].quantity + 1
                }
            };
        });
    };

    return (
        <StoreContext.Provider value={{
            cartItems,
            setCartItem,
            restaurantInfo,
            setRestaurantInfo,
            addToCart,
            calculateCartTotals,
            food_list,
            menu_list
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider;
