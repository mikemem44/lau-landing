import z from "zod";

export const searchSchema = z.object({
    name: z.string().min(1, {message: "El campo es requerido"}),
    email: z.string().min(1, {message: "El campo es requerido"}),
    subject: z.string().min(1, {message: "El campo es requerido"}),
    message: z.string().min(1, {message: "El campo es requerido"})
})

export type ContactType = z.infer<typeof searchSchema>;