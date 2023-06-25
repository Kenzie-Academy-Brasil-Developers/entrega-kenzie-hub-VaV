import { z } from "zod";

export const LoginForm = z.object({
    email: z.string().min(1, "E-mail is required").email("Please type a valid E-mail"),
    password: z.string().min(1, "Password must be have at least 1 characters")
})