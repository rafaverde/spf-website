import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nombre obligatorio"),
  email: z.email("Email inválido"),
  subject: z.string().min(3, "Asunto obligatorio"),
  message: z.string().min(10, "Mensaje muy corto"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
