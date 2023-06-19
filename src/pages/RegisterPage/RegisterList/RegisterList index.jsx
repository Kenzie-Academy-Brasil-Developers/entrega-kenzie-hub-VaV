import { RegisterCard } from "../RegisterCard/RegisterCard index";


export const RegisterList = ({ registerList, setRegisterList }) => {

    return (
        <ul>
            {registerList.map(register => (
                <RegisterCard key={register.id} register={register} setRegisterList={setRegisterList} />
            ))}
        </ul>
    );
};