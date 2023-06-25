
import { useContext } from "react";
import { UserContext } from "../../../provider/UserContext";


export const RegisterList = () => {
    const {user} = useContext(UserContext)
  
    return (
        <div>
            
            <h1>
             {user.name} - {user.course_module}
            </h1>   
        </div>
    );
};