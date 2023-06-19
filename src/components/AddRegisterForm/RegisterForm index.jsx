import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../Inputs/input index";
import { formBlueprint } from "./FormBlueprint";
import { api } from "../../services/api";

import { ButtonLogin} from "../../styles/typography";
import { LoginContainer, Select} from "./styles";
import { useNavigate } from "react-router-dom";


export const AddRegisterForm = ({ setRegisterList }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formBlueprint)
    });

    const navigate = useNavigate();

    const createUser = async (formData) => {
        try {
            const { data } = await api.post("/users", formData);
            setRegisterList((registerlist) => [...registerlist, data]);
            navigate("/HomePage")
            localStorage.geItem("Token", data)
        } catch (error) {
            console.log(error);
        }
    };

    const submit = (formData) => {
        createUser(formData);
        reset();
    };


    return (

        <LoginContainer onSubmit={handleSubmit(submit)} noValidate>
            <Input required label="name:" type="text" {...register("name")} />
            

            <Input required label="email:" type="text" {...register("email")} />
            

            <Input required label="password:" type="password" {...register("password")} />
         

            <Input required label="confirm password:" type="password" {...register("confirmpassword")} />
            

            <Input label="bio:" type="text" {...register("bio")} />
           

            <Input required label="contact:" type="text" {...register("contact")} />
           
            <Select name="Module" id="Course-Module" label="course_module:" {...register("course_module")}>
                <option value=""> Please choose an option</option>
                <option value="M1">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="M2">Segundo módulo (Frontend Avançado)</option>
                <option value="M3">Terceiro módulo (Introdução ao Backend)</option>
                <option value="M4">Quarto módulo (Backend Avançado)</option>
            </Select>
            <button type="submit" className={ButtonLogin}> Sign-in</button>
        </LoginContainer >

    );
};
