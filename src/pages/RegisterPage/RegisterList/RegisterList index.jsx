import { RegisterCard } from "../RegisterCard/RegisterCard index";


export const RegisterList = ({ registerList }) => {

    return (
        <ul>
            {registerList.map(register => (
                <RegisterCard key={register.id} register={register} />
            ))}
        </ul>
    );
};