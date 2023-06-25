import { forwardRef } from "react";
import { FieldSet, } from "./styles";


export const Input = forwardRef(({ label, type, id, error, ...rest }, ref) => {
    return (

        <FieldSet>
            {label ? <label> {label}</label> : null}
            <input type={type} id={id} {...rest} ref={ref} />
            {error ? (<p>{error.message}</p>) : null}
        </FieldSet>

    );
});

