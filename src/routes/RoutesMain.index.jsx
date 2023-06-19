import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage index";
import { LoginPage } from "../pages/LoginPage/LoginPage index";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage index";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const RoutesMain = ({ isLogin, setIsLogin }) => {

    const [registerList, setRegisterList] = useState([]);

    /*    useEffect(() => {
           const loadRegister = async () => {
               try {
                   const { data } = await api.get("/profile");
                   setRegisterList(data);
               } catch (error) {
                   console.log(error);
               }
           };
           loadRegister();
       }); */

    return (
        <Routes>
            <Route path="/" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />} />
            <Route path="/Register" element={<RegisterPage registerList={registerList} setRegisterList={setRegisterList} />} />
            <Route path="/HomePage" element={<HomePage registerList={registerList} setRegisterList={setRegisterList} />} />
        </Routes>

    );
}

