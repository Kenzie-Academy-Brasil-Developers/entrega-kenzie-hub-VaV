import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
    const { user } = useContext(UserContext);

    return !user ? <Outlet/> : <Navigate to="/HomePage"/>
}; 