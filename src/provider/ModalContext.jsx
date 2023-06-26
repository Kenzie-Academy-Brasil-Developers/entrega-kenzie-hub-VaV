
import { createContext, useState } from "react";


export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

   
    const [loaded, setLoaded] = useState(false);

    return (
        <ModalContext.Provider value={{modalCateg, setModalCateg, modalState, setModalState, loaded, setLoaded}}>
            {children}
        </ModalContext.Provider>
    );

};
