import React, { useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = React.createContext(null);

const AuthContextProvider = ({ children }) => {
    const [Loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    const login = (userData, token, role) => {
        setUser(userData);
        Cookies.set("token", token, { expires: 7, path: "/" });
        setRole(role);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("role", JSON.stringify(role));
    };

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
        setRole(null);
        localStorage.removeItem("user");
        localStorage.removeItem("role");
    };

    useEffect(() => {
        const accessToken = Cookies.get("token");
        const storedUser = localStorage.getItem("user");
        const storedRole = localStorage.getItem("role");
        console.log("Access Token:", storedUser);
        if (accessToken && storedUser && storedRole) {
            try {
                setUser(JSON.parse(storedUser));
                setRole(JSON.parse(storedRole));
                setIsAuthenticated(true);
            } catch (error) {
                console.error(
                    "Error parsing user or role from localStorage:",
                    error
                );
                setIsAuthenticated(false);
                setUser(null);
                setRole(null);
            }
        } else {
            setIsAuthenticated(false);
            setUser(null);
            setRole(null);
        }

        setLoading(false);
    }, []); 

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, login, logout, user, role, Loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContextProvider;