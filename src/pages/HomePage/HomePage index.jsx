import Logo from "../../assets/Logo.png";
import { Headline, Headline1 } from "../../styles/typography";
import { RegisterList } from "../RegisterPage/RegisterList/RegisterList index";
import { Header, HomePageContainer, Main, Navbar, NavButton } from "./styles";
import { NavLink } from "react-router-dom";




export const HomePage = ({ registerList, setRegisterList }) => {

    return (
        <>
            <HomePageContainer>
                <Navbar>
                    <img src={Logo} alt="" />
                    <NavButton>
                        <NavLink to="/"> <li>Loggout</li> </NavLink>
                    </NavButton>
                </Navbar>
                <div>
                    <Header>
                        <RegisterList registerList={registerList} setRegisterList={setRegisterList}/>
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
