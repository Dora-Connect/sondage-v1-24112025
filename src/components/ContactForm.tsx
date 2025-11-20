// Fichier : ./components/ContactForm.tsx

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { translations } from "../translations";

interface ContactFormProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  language?: "fr" | "en";
}

export function ContactForm({ children, variant = "default", className = "", language = "fr" }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const t = translations[language].contactForm;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    try {
      if (!db) {
        throw new Error(t.errorConfig);
      }

      const contactData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        recipients: ["issa2018oia@gmail.com", "cra.djoman@gmail.com"],
        createdAt: serverTimestamp(),
        status: "nouveau",
        read: false,
        language: language
      };

      const docRef = await addDoc(collection(db, "contact_messages"), contactData);
      console.log("✅ Message sauvegardé dans Firebase avec l'ID:", docRef.id);

      setIsSuccess(true); // Afficher le message de succès

      // Le spinner continuera de tourner pendant que le message de succès est affiché.
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(false);
        setOpen(false); // La fermeture de la modale réinitialisera l'état isSubmitting
      }, 3000);

    } catch (err) {
      console.error("❌ Erreur lors de l'envoi:", err);
      setError(
        err instanceof Error
          ? err.message
          : t.errorGeneric
      );

      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-[#0A2540]">
            <Mail className="w-6 h-6 text-[#3461FF]" />
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl text-[#0A2540]">{t.successTitle}</h3>
            <p className="text-gray-600">
              {t.successMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            {/* Le reste du JSX est inchangé et correct */}
            <div className="space-y-2">
              <Label htmlFor="name">{t.nameLabel}</Label>
              <Input id="name" name="name" placeholder={t.namePlaceholder} value={formData.name} onChange={handleChange} required className="border-gray-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.emailLabel}</Label>
              <Input id="email" name="email" type="email" placeholder={t.emailPlaceholder} value={formData.email} onChange={handleChange} required className="border-gray-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">{t.subjectLabel}</Label>
              <Input id="subject" name="subject" placeholder={t.subjectPlaceholder} value={formData.subject} onChange={handleChange} required className="border-gray-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t.messageLabel}</Label>
              <Textarea id="message" name="message" placeholder={t.messagePlaceholder} value={formData.message} onChange={handleChange} required rows={5} className="border-gray-300 resize-none" />
            </div>
            {error && (
              <div className="text-red-500 text-sm mt-2">
                <AlertCircle className="w-4 h-4 inline-block mr-1" /> {error}
              </div>
            )}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1" disabled={isSubmitting}>
                {t.cancel}
              </Button>
              <Button type="submit" className="flex-1 bg-[#3461FF] hover:bg-[#2850CC] text-white" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t.send}
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
