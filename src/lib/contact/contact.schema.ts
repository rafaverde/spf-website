import { z } from "zod";

type TFn = (key: string) => string;

export const createContactSchema = (t: TFn) =>
  z.object({
    name: z.string().min(2, t("common.form.errors.nameRequired")),
    email: z.email(t("common.form.errors.emailRequired")),
    subject: z.string().min(3, t("common.form.errors.subjectRequired")),
    message: z.string().min(10, t("common.form.errors.messageRequired")),
  });

// Schema fallback (server-side sem i18n)
export const contactSchema = createContactSchema((key) => {
  const fallback: Record<string, string> = {
    "form.errors.nameRequired": "El nombre es obligatorio.",
    "form.errors.emailRequired":
      "El correo electrónico es obligatorio o es inválido.",
    "form.errors.subjectRequired": "El asunto es obligatorio.",
    "form.errors.messageRequired":
      "El mensaje es obligatorio o message es muy corto.",
  };

  return fallback[key] ?? key;
});

export type ContactFormData = z.infer<typeof contactSchema>;
