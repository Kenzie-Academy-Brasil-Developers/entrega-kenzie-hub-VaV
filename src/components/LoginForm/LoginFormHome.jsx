import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";
import { Input } from "../Inputs/input index";
import { LoginPageForm, ImageContainer, LoginContainer, Phrase, SigninButton } from "../../pages/LoginPage/styles";
import { InfoLogin } from "../../pages/LoginPage/styles";
import { Headline1 } from "../../styles/typography";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm } from "./LoginForm";

import Logo from "../../assets/Logo.png";

export const LoginFormHome = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginForm)
    });

    const { userLoggedIn } = useContext(UserContext);

    const submit = (formData) => {
        userLoggedIn(formData);
    };

    return (
        <LoginPageForm onSubmit={handleSubmit(submit)}>
            <ImageContainer>
                <img src={Logo} alt="Knezie-Hub" />
            </ImageContainer>
            <LoginContainer>
                <InfoLogin>
                    <Headline1>
                        Login
                    </Headline1>
                    <Input type="text" placeholder="E-mail" {...register("email")} />
                    <Input type="password" placeholder="Password"{...register("password")} />
                    <button type="submit"> Enter </button>
                    <Phrase> Still don't have an account? </Phrase>
                    <Link to="/Register">
                        <SigninButton> Sign-in </SigninButton>
                    </Link>
                </InfoLogin>
            </LoginContainer>
        </LoginPageForm >
    );
};