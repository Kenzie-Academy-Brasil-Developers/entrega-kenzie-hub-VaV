import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";
import { TechContext } from "../../provider/TechContext";


export const UserTechnologyList = () => {

    const { user } = useContext(UserContext);
    const { setTech } = useContext(TechContext);

    return (
        <li>
            {user.techs.map((tech, index) => (
                <button key={index}>
                    <h2 >
                        {tech.title}
                    </h2>
                    <h3>
                        {tech.status}
                    </h3>
                </button>
            ))}
        </li>
    );
};