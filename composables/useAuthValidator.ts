import { z } from "zod";

export default function useAuthValidator({ email, password, name }: any, type: string) {
    if (type == "login") {
        const loginSchema = z.object({
            email: z.string().email().min(1),
            password: z.string().min(6)
        });

        return loginSchema.parse({ email, password });
    } else if (type == "signup") {
        const loginSchema = z.object({
            email: z.string().email().min(1),
            password: z.string().min(6),
            name: z.string()
        });

        return loginSchema.parse({ email, password, name });
    }
};