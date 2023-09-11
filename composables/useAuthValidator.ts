import { string, z } from "zod";

export default function useAuthValidator({ email, password, name, image }: any, type: string) {
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
                name: z.string(),
                image: z.object({
                    name: z.string(),
                    size: z.number(),
                    lastModified: z.number(),
                    lastModifiedDate: z.string(),
                    type: string()
                })
            });
    
            body = loginSchema.parse({ email, password, name });
        };

        return {
            flag: true,
            ...body
        };

    } catch (error) {
        let errors: any = {
            flag: false,
          }
      
          if (error instanceof z.ZodError) {
            const zodIssues = error.issues;
      
            for (let i = 0; i < zodIssues.length; i++) {
              errors[zodIssues[i].path[0]] = zodIssues[i].message;
            };
          };
      
          return errors;
    }
};