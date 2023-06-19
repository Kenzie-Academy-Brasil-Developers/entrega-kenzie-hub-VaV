import { forwardRef } from "react";
import { FieldSet } from "./styles";


export const Input = forwardRef(({ label, type, id, error, ...rest}, ref) => {
    return (

        <FieldSet>
            {label ? <label> {label}</label> : null}
            <input type={type} id={id} ref={ref} {...rest} />
            {error ? (<p>{error.message}</p>) : null}
        </FieldSet>

    );
});



/* const InputTwo = ({ label, type, register, error }) => {

    return (
        <div>
            <Input required label="name:" type="text" {...register("name")} />
            {errors.name ? <HeadlineItalic>{errors.name.message}</HeadlineItalic> : null}
        </div>

    );
}
 */

