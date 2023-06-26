
import { useContext } from "react";
import { UserContext } from "../../../provider/UserContext";
import { UserDiv, UserModule, UserName } from "./styles";


export const RegisterList = () => {
    const { user } = useContext(UserContext);
    
    return (
        <UserDiv>

            <UserName>
                {user.name}
            </UserName>
            <UserModule>
                {user.course_module}
            </UserModule>
        </UserDiv>
    );
};