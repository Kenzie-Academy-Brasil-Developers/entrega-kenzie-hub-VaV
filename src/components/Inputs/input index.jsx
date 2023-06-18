import { forwardRef } from "react";
import { FieldSet } from "./styles";


export const Input = forwardRef(({ label, type, id, ...rest, error }, ref) => {
    return (

        <FieldSet>
            {label ? <label> {label}</label> : null}
            <input type={type} id={id} ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
            
        </FieldSet>

    );
});

