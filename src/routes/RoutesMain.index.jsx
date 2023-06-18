import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage index";
import { LoginPage } from "../pages/LoginPage/LoginPage index";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage index";
import { useState } from "react";

export const RoutesMain = () => {

    const [registerList, setRegisterList] = useState([]);



    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage registerList={registerList} />} />
            <Route path="/HomePage" element={<HomePage />} />
        </Routes>

    );
}

