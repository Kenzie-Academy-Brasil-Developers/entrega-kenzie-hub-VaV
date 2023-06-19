import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import { Headline, Headline1} from "../../styles/typography";

import { RegisterList } from "../RegisterPage/RegisterList/RegisterList index";


export const HomePage = ({registerList, setRegisterList}) => {

    return (
        <>
            <div>
                <header>
                    <img src={Logo} alt="" />
                    <Link to="/"> Loggout </Link>
                </header>
                <div>
                    <RegisterList registerList={registerList} setRegisterList={setRegisterList} />
                </div>
                <div>
                    <Headline1>  What a shame, we are still in development D:</Headline1>
                    <Headline> our application is under developemnt, but soon we'll have some news :3</Headline>
                </div>
            </div>
        </>
    );
};
