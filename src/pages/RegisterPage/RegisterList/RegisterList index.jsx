import { RegisterCard } from "../RegisterCard/RegisterCard index";
import { produce } from "immer";


export const RegisterList = ({ registerList, setRegisterList }) => {

    const reverseList = produce (registerList, draft =>{
        draft.reverse()
    })


    return (
        <ul>
            {reverseList.map(register => (
                <RegisterCard key={register.id} register={register} setRegisterList={setRegisterList} />
            ))}
        </ul>
    );
};