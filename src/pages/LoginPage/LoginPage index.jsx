
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

import { ButtonLogin, Headline, Headline1, Headline1rem } from "../../styles/typography";
import { LoginPageDiv, LoginContainer, ImageContainer, InfoLogin, EmailInput, PasswordInput, Phrase, SigninButton } from "./styles";


export const LoginPage = ({ setIsLogin }) => {

    const navigate = useNavigate();

    const userLogin = () => {
        setIsLogin(true);
        localStorage.setItem("@USERID", "true");
        localStorage.setItem("TOKEN", "True");
        navigate("/HomePage");
    };



    const userLoggedin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);
            localStorage.setItem("token", data);
        } catch (error) {
            console.log(error);
        }
    };

    const submit = (formData) => {
        userLoggedin(formData);
        reset();
    };

    return (
        <LoginPageDiv>
            <ImageContainer>
                <img src={Logo} alt="" />
            </ImageContainer>
            <LoginContainer>
                <InfoLogin>
                    <Headline1>
                        Login
                    </Headline1>
                    <div>
                        <Headline>E-mail</Headline>
                        <EmailInput type="text" placeholder="E-mail" />
                    </div>
                    <div>
                        <Headline>Password</Headline>
                        <PasswordInput type="password" placeholder="Password" />
                    </div>
                    <button onClick={userLogin}> Enter </button>
                    <Phrase> Still don't have an account? </Phrase>

                    
                    <Link to="/Register">
                        <SigninButton className={ButtonLogin}> Sign-in </SigninButton>
                    </Link>
                </InfoLogin>
            </LoginContainer>
        </LoginPageDiv>

    );
};
