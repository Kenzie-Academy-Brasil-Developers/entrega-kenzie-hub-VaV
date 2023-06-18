import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../Inputs/input index";
import { formBlueprint } from "./FormBlueprint";
import { api } from "../../services/api";

import { ButtonLogin } from "../../styles/typography";
import { LoginContainer } from "./styles";


export const AddRegisterForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formBlueprint)
    });

    const userRegister = async (formData) => {
        try {
            const { data } = await api.post("/users", formData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const submit = (formData) => {
        userRegister(formData);
        reset();
    };

  
    return (

        <LoginContainer onSubmit={handleSubmit(submit)}>
            <Input required label="name:" type="text" {...register("name")} />
            {errors.name ? <p>{errors.name.message}</p> : null}

            <Input required label="email:" type="text" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}

            <Input required label="password:" type="password" {...register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}

            <Input required label="confirm password:" type="password" {...register("confirmpassword")} />
            {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}

            <Input label="bio:" type="text" {...register("bio")} />
            {errors.bio ? <p>{errors.bio.message}</p> : null}

            <Input required label="contact:" type="text" {...register("contact")} />
            {errors.contact ? <p>{errors.contact.message}</p> : null}

            <select name="Module" id="Course-Module" label="course_module:" {...register("course_module")}>
                <option value=""> Please choose an option</option>
                <option value="M1">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="M2">Segundo módulo (Frontend Avançado)</option>
                <option value="M3">Terceiro módulo (Introdução ao Backend)</option>
                <option value="M4">Quarto módulo (Backend Avançado)</option>
            </select>
            {errors.course_module ? <p>{errors.course_module.message}</p> : null}
            <button type="submit" className={ButtonLogin}> Sign-in</button>
        </LoginContainer >

    );
};
