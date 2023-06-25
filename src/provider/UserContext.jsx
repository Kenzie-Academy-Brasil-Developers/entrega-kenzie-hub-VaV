import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { api } from "../services/api";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(LoginForm) });

    useEffect(() => {
        const loadedUser = async () => {
            const token = localStorage.getItem("@TOKEN");
            const userId = localStorage.getItem("@UDERID");

            if (token && userId) {
                try {
                    const { data } = await api.get(`/profile/${token}`);
                    setUser(data);
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem("@TOKEN");
                    localStorage.removeItem("@USERID");
                }
            }
        };
        loadedUser();
    }, []);

    const userLoggedin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            navigate("/HomePage");

        } catch (error) {
            console.log(error);
        }
    };

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

    const handleUserLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");

    };

    return (
        <UserContext.Provider value={{ user, setUser, userLoggedin, register, handleSubmit, reset, errors, createUser, handleUserLogout }}>
            {children}
        </UserContext.Provider>
    );
};