import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const userUpdate = (data) => {
        setUser(data);
    };

    const navigate = useNavigate();

    const currentPath = window.location.pathname;


    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");


        const loadUser = async () => {

            try {
                setLoading(true);
                const { data } = await api.get(`/profile/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                navigate(currentPath);
            } catch (error) {
                console.log(error);
                localStorage.removeItem("@TOKEN");
                localStorage.removeItem("@USERID");

            } finally {
                setLoading(false);
            }
            if (token && id) {
                loadUser();
            }
        };
    }, []);


    const createUser = async (formData) => {
        try {
            const { data } = await api.post("/users", formData);
            localStorage.setItem("@TOKEN", data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
        console.log(formData);
    };

    const userLoggedIn = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            navigate("/HomePage");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUserLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");

    };

    return (
        <UserContext.Provider value={{ user, createUser, userLoggedIn, handleUserLogout, loading, userUpdate, setLoading }}>
            {children}
        </UserContext.Provider>
    );
};