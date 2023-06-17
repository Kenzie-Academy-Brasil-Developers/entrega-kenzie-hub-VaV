import { useForm } from "react-hook-form"

import { ButtonLogin, Headline1rem, Headline1remInput, HeadlineLabel } from "../../styles/typography"
import { LoginContainer } from "./styles"


export const AddRegisterForm = () => {

    const { register, handleSubmit, reset } = useForm();

    const submit = (formData) => {
        console.log(formData);
        reset();
    }

    console.log("rendered")
    return (
        <LoginContainer onSubmit={handleSubmit(submit)}>
            <HeadlineLabel >Name</HeadlineLabel>
            <div>
                <input type="text" {...register("name")} />
            </div>
            <HeadlineLabel>E-mail</HeadlineLabel >
            <div>
                <input type="text" {...register("email")} />
            </div>
            <HeadlineLabel>Password</HeadlineLabel>
            <div>
                <input type="password" {...register("password")} />
            </div>
            <HeadlineLabel>Confirm Password</HeadlineLabel>
            <div>
                <input type="password" {...register("password")} />
            </div>
            <HeadlineLabel> Bio</HeadlineLabel>
            <div>
                < input type="text" {...register("bio")} />
            </div>
            <HeadlineLabel>Contact</HeadlineLabel>
            <div>
                <input type="text" {...register("contact")} />
            </div>
            <HeadlineLabel>Select your Module</HeadlineLabel>
            <div>
                <select name="Module" id="Course-Module" {...register("course_module")}>
                    <option value=""> Please choose an option</option>
                    <option value="M1">M1</option>
                    <option value="M2">M2</option>
                    <option value="M3">M3</option>
                    <option value="M4">M4</option>
                    <option value="M5">M6</option>
                    <option value="M6">M6</option>
                </select>
            </div>
            <button type="submit" className={ButtonLogin}> Sign-in</button>
        </LoginContainer>
    )
}
