import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent successfully! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Office</p>
                  <p className="text-sm text-muted-foreground">{personalInfo.officeAddress}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                rows={5}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              <Send className="h-4 w-4 mr-2" /> Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
