
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [tech, setTech] = useState([]);
    const [works, setWorks] = useState([]);

   /*  useEffect(() => {
        const LoadTechs = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("/users");
                setTech(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        LoadTechs();
    }, []); */

    const createTech = async (formData) => {

        const token = localStorage.getItem("@TOKEN");

        try {
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <TechContext.Provider value={{loading, tech, createTech }}>
            {children}
        </TechContext.Provider>
    );
};