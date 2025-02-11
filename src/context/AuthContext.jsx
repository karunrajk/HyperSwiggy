import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);

    const login = (name) => {
        setIsLoggedIn(true);
        setUserName(name);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserName(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
