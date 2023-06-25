import Logo from "../../assets/Logo.png";
import { Headline, Headline1 } from "../../styles/typography";
import { RegisterList } from "../RegisterPage/RegisterList/RegisterList index";
import { Header, HomePageContainer, Main, Navbar } from "./styles";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";

import { NavButton } from "./styles";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../provider/UserContext";

export const HomePage = () => {

    const { handleUserLogout } = useContext(UserContext);

    useEffect(() => {
        const loadedUser = async () => {
            const token = localStorage.getItem("@TOKEN");
            const userId = localStorage.getItem("@UDERID");

            if (token && userId) {
                try {
                    const { data } = await api.get(`/profile/${token}`);
                    setIsLogin(data);
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem("@TOKEN");
                    localStorage.removeItem("@USERID");
                }
            }
        };
        loadedUser();
    }, []);
    return (
        <>
            <HomePageContainer>
                <Navbar>
                    <img src={Logo} alt="" />
                    <NavButton>
                        <NavLink to="/" onClick={handleUserLogout}> <li>Loggout</li> </NavLink>
                    </NavButton>
                </Navbar>
                <div>
                    <Header>
                        <RegisterList />
                    </Header>
                </div>
                <Main>
                    <Headline1>  What a shame, we are still under development D:</Headline1>
                    <Headline> our application is under developemnt, but soon we'll have some news :3</Headline>
                </Main>
            </HomePageContainer>
        </>
    );
};
