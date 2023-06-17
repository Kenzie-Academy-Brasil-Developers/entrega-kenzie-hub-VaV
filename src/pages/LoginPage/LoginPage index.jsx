
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"

import { ButtonLogin, Headline, Headline1, Headline1rem } from "../../styles/typography"


export const LoginPage = () => {

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
                <ButtonLogin> Enter </ButtonLogin>

                <div>
                    <Headline1rem> Still don't have an account? </Headline1rem>
                    
                    <Link to="/users">
                    <button className={ButtonLogin}> Sign-in </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

/*  Kenzie Hub IMAGE
    Login h1 --> Headline1
    E-mail written <p> --> Headline
    input E-mail <p> --> Headline
    Input Password <p> --> Headline
    Login button --> Text: Entrar -->

    Sign-in-Button --> text above: still don't have an account? --> Headline1rem

    button text: Sign-in --> ButtonLogin
*/