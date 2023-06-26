import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage index";
import { LoginPage } from "../pages/LoginPage/LoginPage index";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage index";
import { ProtectedRoutes } from "../components/ProtectedRoutes/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes/PublicRoutes";
import { TechProvider } from "../provider/TechContext";


export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/Register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/HomePage" element={<TechProvider><HomePage /></TechProvider>} />
            </Route>
        </Routes>
    );
}

