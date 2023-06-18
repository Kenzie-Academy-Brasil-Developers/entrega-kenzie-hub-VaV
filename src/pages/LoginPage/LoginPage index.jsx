
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

import { ButtonLogin, Headline, Headline1, Headline1rem } from "../../styles/typography";


export const LoginPage = ({ setIsLogin }) => {

    const navigate = useNavigate();

    const userLogin = () => {
        setIsLogin(true);
        localStorage.setItem("@LOGIN", "true");
        navigate("/HomePage");
    };

    return (
        <>
            <img src={Logo} alt="" />
            <div>
                <Headline1>
                    Login
                </Headline1>
                <div>
                    <Headline>E-mail</Headline>
                    <input type="text" placeholder="E-mail" className={Headline} />
                </div>
                <div>
                    <Headline>Password</Headline>
                    <input type="password" placeholder="Password" className={Headline} />
                </div>
                <ButtonLogin onClick={userLogin}> Enter </ButtonLogin>

                <div>
                    <Headline1rem> Still don't have an account? </Headline1rem>

                    <Link to="/Register">
                        <button className={ButtonLogin}> Sign-in </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
