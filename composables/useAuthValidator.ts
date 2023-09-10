import { z } from "zod";

export default function useAuthValidator({ email, password, name }: any, type: string) {
    let body;

    try {

        if (type == "login") {
            const loginSchema = z.object({
                email: z.string().email().min(1),
                password: z.string().min(6)
            });
    
            body = loginSchema.parse({ email, password });
        } else if (type == "signup") {
            const loginSchema = z.object({
                email: z.string().email().min(1),
                password: z.string().min(6),
                name: z.string()
            });
    
            body = loginSchema.parse({ email, password, name });
        };

        return {
            flag: true,
            ...body
        };

    } catch (error) {
        console.log(error);
    }
};