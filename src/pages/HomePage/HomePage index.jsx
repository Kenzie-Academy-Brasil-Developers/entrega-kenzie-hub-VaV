import Logo from "../../assets/Logo.png";
import { Headline, Headline1 } from "../../styles/typography";
import { RegisterList } from "../RegisterPage/RegisterList/RegisterList index";
import { Header, HomePageContainer, Main, Navbar } from "./styles";
import { useContext} from "react";

import { NavButton } from "./styles";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../provider/UserContext";
import { TechProvider } from "../../provider/TechContext";
import { UserTechnologyList } from "../../components/UserTechnologies/UserTechnologiesList";

export const HomePage = () => {



    const {handleUserLogout } = useContext(UserContext);
    /* const{ createTech} = useContext(TechProvider) */

    return (
        <>
            <HomePageContainer>
                <Navbar>
                    <img src={Logo} alt="" />
                    <NavButton>
                        <NavLink to="/" onClick={handleUserLogout}> <li>Loggout</li> </NavLink>
                    </NavButton>
                </Navbar>
                <Header>
                    <RegisterList />
                </Header>
                <Main>
                    <UserTechnologyList/>
                    <Headline1>  What a shame, we are still under development D:</Headline1>
                    <Headline> our application is under developemnt, but soon we'll have some news :3</Headline>
                </Main>
            </HomePageContainer>
        </>
    );
};
