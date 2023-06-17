import { Link } from "react-router-dom"

import Logo from "../../assets/Logo.png"

import { Headline, Headline1 } from "../../styles/typography"
import { AddRegisterForm } from "../../components/AddRegisterForm/RegisterForm index"
import { RegisterList } from "./RegisterList/RegisterList index"



export const RegisterPage = ({registerList}) => {

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
                    <AddRegisterForm />
                    <RegisterList registerList={registerList}/>
                </div>
            </div>
        </>
    )
}

/* 
    Kenzie Hub IMAGE --> Back to home Button --> Headlines1rem
    Create your Account --> Healine1
    Fast and free, here we go! --> Headline

    Name Input:
    Name <p> --> Headline
    input Placeholder --> Headline1rem

    E-mail Input: 
    E-mail <p> --> Headline
    input Placeholder --> Headline1rem

    Password Input: 
    Password <p> --> Headline
    input Placeholder --> Headline1rem

    Confirm Password Input: 
    Confirm Password <p> --> Headline
    input Placeholder --> Headline1rem

    Bio Password Input: 
    Bio Password <p> --> Headline
    input Placeholder --> Headline1rem

    Contact Password Input: 
    Contact Password <p> --> Headline
    input Placeholder --> Headline1rem

    Select Module Password Input: 
    Select Module Password <p> --> Headline
    input Placeholder --> Headline1rem

    Sign-in Button --> ButtonLogin

*/