
export const RegisterCard = ({ register }) => {


    return (
        <li>
            <h3>
                Hello, {register.name}
            </h3>
            <span>{register.course_module}</span>
        </li>
    );
};