import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "../lib/utils";
import { toast } from "react-toastify";
import { useRef } from "react";
import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(serviceId, templateId, form.current!, publicKey);
      toast.success(t("contact.toast.success"), {
        position: "top-right",
      });
      form.current?.reset();
    } catch {
      toast.error(t("contact.toast.error"), {
        position: "top-right",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title")}{" "}
          <span className="text-primary text-glow">
            {t("contact.titleHighlight")}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto lg:text-xl">
          {t("contact.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.info.title")}
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium lg:text-xl">
                    {t("contact.info.email")}
                  </h4>
                  <a
                    href="mailto:pawel.szoltysek.dev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors lg:text-xl"
                  >
                    pawel.szoltysek.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium lg:text-xl">
                    {t("contact.info.location")}
                  </h4>
                  <a className="text-muted-foreground hover:text-primary hover:cursor-pointer transition-colors lg:text-xl">
                    Erkelenz, North Rhine-Westphalia, Germany
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-2xl">
                {t("contact.info.connect")}
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://linkedin.com/in/pawel-szoltysek-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={40} />
                </a>
                <a
                  href="https://github.com/PawelSzoltysek93"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={40} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.form.title")}
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 hover:cursor-pointer"
                )}
              >
                <Send size={16} />
                {t("contact.form.submit")}
              </button>

              {/* Privacy Notice - DSGVO/GDPR compliant */}
              <p className="text-xs text-muted-foreground text-center leading-relaxed pt-2">
                {t("contact.form.privacy")}{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.form.privacyLink")}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
