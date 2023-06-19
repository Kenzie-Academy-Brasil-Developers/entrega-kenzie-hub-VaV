import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";

import { Headline, Headline1 } from "../../styles/typography";
import { AddRegisterForm } from "../../components/AddRegisterForm/RegisterForm index";
import { NavbarRegister, NavButtonRegister, TextContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { Phrase } from "../LoginPage/styles";



export const RegisterPage = ({ registerList, setRegisterList }) => {

    return (
        <>
            <NavbarRegister>
                <img src={Logo} alt="" />
                <NavButtonRegister>
                    <NavLink to="/"> <li>Loggout</li> </NavLink>
                </NavButtonRegister>
            </NavbarRegister>
            <TextContainer>
                <Headline1>
                    RegisterPage
                </Headline1>
                <Phrase>
                    Fast and free, here we go!
                </Phrase>
                <div>
                    <AddRegisterForm setRegisterList={setRegisterList} />
                </div>
            </TextContainer>
        </>
    );
};
