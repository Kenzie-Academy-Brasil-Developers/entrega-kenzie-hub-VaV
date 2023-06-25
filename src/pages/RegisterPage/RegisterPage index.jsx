
import Logo from "../../assets/Logo.png";

import { NavLink } from "react-router-dom";
import { AddRegisterForm } from "../../components/AddRegisterForm/RegisterForm index";
import { Headline1 } from "../../styles/typography";
import { NavbarRegister, NavButtonRegister, TextContainer, LoginRegContainer } from "./styles";
import { Phrase } from "../LoginPage/styles";


export const RegisterPage = () => {

    return (
        <>
            <NavbarRegister>
                <img src={Logo} alt="" />
                <NavButtonRegister>
                    <NavLink to="/"> <li> Home </li> </NavLink>
                </NavButtonRegister>
            </NavbarRegister>
            <TextContainer>
                <LoginRegContainer>
                    <Headline1>
                        RegisterPage
                    </Headline1>
                    <Phrase>
                        Fast and free, here we go!
                    </Phrase>
                    <AddRegisterForm />
                </LoginRegContainer>
            </TextContainer>
        </>
    );
};
