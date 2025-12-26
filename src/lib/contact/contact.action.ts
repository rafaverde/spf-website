"use server";

import { contactSchema } from "./contact.schema";
import { transporter } from "./mailer";

export async function sendContactEmail(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    await transporter.sendMail({
      from: `"Contacto SPF" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email, // email do usuário do formulário
      subject: `[Contacto Web] ${subject}`,
      html: `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
