import { useState } from "react";
import { Button } from "../components/ui/Button.tsx";
import { Input } from "../components/ui/Input.tsx";
import { Textarea } from "../components/ui/TextArea.tsx";
import {
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "sonner"; // ✅ use sonner toast directly

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/DiilaNa", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dilan-liyanaarachchi-8a0a01244/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:liyanaarachchidilan@gmail.com",
      label: "Email",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dilan_liyanaarachchi",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/17YDSNkJHu/",
      label: "Facebook",
    },
    { icon: FaWhatsapp, href: "https://wa.me/94713804825", label: "Whatsapp" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? Feel free to reach
              out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="backdrop-blur-sm bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50"
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50"
                />
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="bg-background/50"
                />
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-background/50 resize-none"
                />

                <Button
                  type="submit"
                  className="w-full group"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      Sending...
                      <svg
                        className="animate-spin h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in">
              <div className="backdrop-blur-sm bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media or send me an email. I'm always open
                  to discussing new projects and opportunities.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <social.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm hidden sm:inline">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
