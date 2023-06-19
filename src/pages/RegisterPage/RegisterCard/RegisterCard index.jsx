
export const RegisterCard = ({ register }) => {


    return (
        <div>
            <h3>
                Hello, {register.name}
            </h3>
            <p>{register.course_module}</p>
        </div>
    );
};