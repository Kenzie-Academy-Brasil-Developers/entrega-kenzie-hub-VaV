
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

import { UserContext } from "./UserContext";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";




export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const { userUpdate, loading, setLoading } = useContext(UserContext);

    const [tech, setTech] = useState([]);
    const [modalCateg, setModalCateg] = useState("");
    const [modalState, setModalState] = useState(false);

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

        //Ainda Temos que Fazer o Modal
        setLoading(true);
        try {
            if (modalCateg === "editModal") {
                const { state } = formData;
                await api.put(`/users/techs/${tech.id}`,
                    { state },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                setModalCateg(false);
                setLoading(false);
            }
            else {
                const { data } = await api.post("/users/techs", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setModalCateg(false);
                setLoading(false);
                setTech(data);
                console.log(data);
            }
        } catch (error) {

            console.log(error);
        }
    };

    const deleteTech = async () => {
        const token = localStorage.getItem("@TOKEN");
        setLoading(true);

        try {
            setLoading(true);
            await api.delete(`/users/techs/${tech.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setModalCateg(false);
            setLoading(false);
            const { data } = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            userUpdate(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }

    };

    return (
        <TechContext.Provider value={{ tech, createTech, deleteTech}}>
            {children}
        </TechContext.Provider>
    );
};