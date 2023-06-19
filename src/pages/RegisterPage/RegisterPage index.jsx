import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";

import { Headline, Headline1 } from "../../styles/typography";
import { AddRegisterForm } from "../../components/AddRegisterForm/RegisterForm index";
import { RegisterList } from "./RegisterList/RegisterList index";



export const RegisterPage = ({ registerList, setRegisterList }) => {

    return (
        <>
            <div>
                <img src={Logo} alt="lOGO KENZIE" />

                <Link to="/"> Back to Home</Link>
            </div>
            <div>
                <Headline1>
                    RegisterPage
                </Headline1>
                <Headline>
                    Fast and free, here we go!
                </Headline>
                <div>
                    <AddRegisterForm setRegisterList={setRegisterList} />
                </div>
            </div>
        </>
    );
};
