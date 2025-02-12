import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userLocation, setUserLocation] = useState({
        type: "WORK",
        address: "BSM Extension, Kengeri Satellite To..."
    });

    const login = (name) => {
        setIsLoggedIn(true);
        setUserName(name);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserName("");
    };

    return (
        <AuthContext.Provider value={{ 
            isLoggedIn, 
            userName, 
            userLocation,
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
