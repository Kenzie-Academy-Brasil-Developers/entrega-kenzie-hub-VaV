import { Link } from "react-router-dom"

import Logo from "../../assets/Logo.png"
import { Headline, Headline1, HeadlineBold } from "../../styles/typography"


export const HomePage = () => {

    return (
        <>
            <div>
                <header>
                    <img src={Logo} alt="" />
                    <Link to="/"> Loggout </Link>
                </header>
                <div>
                    <Headline1>Hello Samuel Lion</Headline1>
                    <HeadlineBold> First Module, Introduction to Frontend </HeadlineBold>
                </div>
                <div>
                    <Headline1>  What a shame, we are still in development D:</Headline1>
                    <Headline> our application is under developemnt, but soon we'll have some news :3</Headline>
                </div>
            </div>
        </>
    )
}

/* HOMEPAGE  

    IMG KENZIE HUB --> loggoutButton --> Headline1remh
    <div>
        Hello, Samuel Lion <h1> --> Headline 1
        First Module, Introduction to Frontend <p> --> HeadlineBold
    </div>

    <div>
        What a shame, we are still in development D:  <h1> -> Headline1

        out application is under developemnt, but soon we'll have some news :3 --> Headline
    </div>hhh
*/