"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contact/contact.schema";
import { sendContactEmail } from "@/lib/contact/contact.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const tCommon = useTranslations("common");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    const result = await sendContactEmail(data);

    if (result.success) {
      setSuccess(true);
      reset();
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-green-100 p-6 text-green-800">
        {tCommon("form.success")}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-1">
        <Input placeholder={tCommon("form.name")} {...register("name")} />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Input placeholder={tCommon("form.email")} {...register("email")} />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Input placeholder={tCommon("form.subject")} {...register("subject")} />
        {errors.subject && (
          <p className="text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Textarea
          placeholder={tCommon("form.message")}
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? tCommon("form.sending") : tCommon("form.submit")}
      </Button>
    </form>
  );
}
