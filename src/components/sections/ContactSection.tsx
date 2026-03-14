import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { SectionReveal, RippleButton } from "../ui";
import { socialLinks } from "../../data";
import { cn } from "../../utils/cn";
import type { SocialLink } from "../../types";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    to_name: "Habiba El Mahfoudi",
  };

  try {
    setStatus("sending");

    await emailjs.send(
      "service_5tv43xm",
      "template_9aq6mat",
      payload,
      "zUAZKBlxxCpqWBGq8"
    );

    setStatus("success");
    form.reset();
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <SectionReveal id="contact" className="container-shell py-20 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: contact info */}
        <motion.div
          whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass rounded-[30px] p-7 sm:p-8"
        >
          <div style={{ transform: "translateZ(18px)" }}>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Construisons quelque chose de remarquable
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/66">
              Ouverte aux opportunités, collaborations, stages et projets
              freelance autour du web, du mobile et des interfaces premium.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:habiba.elmahfoudi@email.com"
                className="surface-pop flex items-center gap-4 rounded-3xl border border-white/8 bg-black/18 p-4 transition hover:border-emerald-400/24"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/12 text-emerald-300">
                  <FiMail />
                </span>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="text-white">elmahfoudihabiba666@gmail.com</p>
                </div>
              </a>

              <div className="surface-pop flex items-center gap-4 rounded-3xl border border-white/8 bg-black/18 p-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/12 text-emerald-300">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-sm text-white/50">Localisation</p>
                  <p className="text-white">Rabat, Maroc</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item: SocialLink, index: number) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -6,
                      rotateX: 8,
                      rotateY: index % 2 === 0 ? -10 : 10,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72 transition hover:border-emerald-400/30 hover:text-emerald-300"
                  >
                    <Icon className="transition group-hover:-translate-y-0.5" />
                    {item.label}
                  </motion.a>
                );
              })}
            </div>

           
          </div>
        </motion.div>

        {/* Right: contact form */}
        <motion.div
          whileHover={{ y: -6, rotateX: 3, rotateY: 3 }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass rounded-[30px] p-7 sm:p-8"
        >
          <div style={{ transform: "translateZ(18px)" }}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Envoyer un message
                </h3>
              </div>
              
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm text-white/65">Nom</span>
                <input
                  required
                  name="name"
                  placeholder="Votre nom"
                  className="w-full rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40 focus:bg-black/24"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm text-white/65">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="vous@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40 focus:bg-black/24"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm text-white/65">Sujet</span>
                <input
                  required
                  name="subject"
                  placeholder="Objet du message"
                  className="w-full rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40 focus:bg-black/24"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm text-white/65">Message</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40 focus:bg-black/24"
                />
              </label>
              <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <RippleButton primary type="submit" className="w-fit">
                  {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}{" "}
                  <FiSend />
                </RippleButton>
                <p
                  className={cn(
                    "text-sm",
                    status === "success" && "text-emerald-300",
                    status === "error" && "text-red-300",
                    status === "idle" && "text-white/42",
                    status === "sending" && "text-white/60"
                  )}
                >
                  {status === "success" && "Message envoyé avec succès."}
                  {status === "error" &&
                    "Échec de l'envoi. Configurez EmailJS pour activer la réception."}
                  {status === "sending" && "Transmission sécurisée du message..."}
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}