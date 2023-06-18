import { z } from "zod";

export const formBlueprint = z.object({
    name: z.string().min(3, "Name is required and must contain at least 3 letters "),
    email: z.string().min(1, "E-mail is required").email("Please type a valid E-mail"),
    password: z.string().min(8, "Password must be have at least 8 characters")
        .regex(/(?=.*[A-Z])/, "password must contain at least One Capital letter")
        .regex(/(?=.*[a-z])/, "password must contain at least One ordinary letter")
        .regex(/(?=.*[0-9])/, "password must contain at least One number")
        .regex(/(?=.*[!@#$%^&*])/, "Password must contain at least one special character"),
        confirmpassword: z.string().min(1, "Please confirm your Password"),
        bio: z.string().min(1,"Bio must contain at least one letter"),
        contact: z.string().min(3, "Contact is required"),
        course_module: z.string().min(1, "Choose one Module")
}).refine(({password, confirmpassword}) => confirmpassword === password, {
    message: "Both passwords must be identical",
    path: ["confirm"],
});


/* 
"id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "Password",
  "bio": "Lorem ipsum dolor emet",
  "contact": "linkedin/in/johndoe",
  "course_module": "Segundo Módulo (Frontend avançado)",
  
*/