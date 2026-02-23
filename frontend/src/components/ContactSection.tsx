import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.status === "success") {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error saving message");
      }
    } catch (error) {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Get in Touch
        </h2>
        <div className="h-1 w-12 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground mb-10">
          Have a question or want to work together? Drop me a message!
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-foreground font-semibold text-lg">
              Thanks for reaching out!
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />

            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              rows={5}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full neon-btn"
            >
              {loading ? "Sending..." : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;