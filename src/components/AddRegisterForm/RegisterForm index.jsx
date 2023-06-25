import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../Inputs/input index";
import { formBlueprint } from "./FormBlueprint";
import { api } from "../../services/api";

import { ButtonLogin, Headline2 } from "../../styles/typography";
import { LoginContainer, Select } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";


export const AddRegisterForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formBlueprint)
    });

    const {user, setUser, userLoggedin, registerList, setRegisterList, createUser} = useContext(UserContext)

    const submit = (formData) => {
        createUser(formData);
        reset();
    };


    return (

        <LoginContainer onSubmit={handleSubmit(submit)}>
            <Input required label="Name:" type="text" {...register("name")} />
            {errors.name ? <p>{errors.name.message}</p> : null}

            <Input required label="E-mail:" type="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}

            <Input required label="Password:" type="password" {...register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}

            <Input required label="Confirm Password:" type="password" {...register("confirmpassword")} />
            {errors.confirmpassword ? <p>{errors.confirmpassword.message}</p> : null}

            <Input label="Bio:" type="text" {...register("bio")} />
            {errors.bio ? <p>{errors.bio.message}</p> : null}

            <Input required label="Contact:" type="text" {...register("contact")} />
            {errors.contact ? <p>{errors.contact.message}</p> : null}
            <div>
                <Headline2>Course Module</Headline2>
                <Select name="course_module" id="course_module" label="Course Module:" {...register("course_module")}>
                    <option value=""> Please choose an option</option>
                    <option value="M1">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="M2">Segundo módulo (Frontend Avançado)</option>
                    <option value="M3">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="M4">Quarto módulo (Backend Avançado)</option>
                </Select>
                {errors.course_module ? <p>{errors.Module.message}</p> : null}
            </div>

            <button type="submit" className={ButtonLogin}> Sign-in</button>
        </LoginContainer >

    );
};
