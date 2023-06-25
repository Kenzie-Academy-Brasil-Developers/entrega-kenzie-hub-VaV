import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage index";
import { LoginPage } from "../pages/LoginPage/LoginPage index";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage index";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/HomePage" element={<HomePage />} />
        </Routes>

    );
}

