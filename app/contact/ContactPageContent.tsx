"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10 pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Ready to start your marketing transformation? We'd love to hear from you. 
              Let's discuss how we can help your brand achieve extraordinary growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-foreground/60">hello@brandbrokers.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-foreground/60">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Mon-Fri from 9am to 6pm EST.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Visit Us</h3>
                      <p className="text-foreground/60">123 Marketing Street<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Come say hello at our office headquarters.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Business Hours</h3>
                      <p className="text-foreground/60">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="w-8 h-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Send us a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <p className="text-green-400 text-center">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p className="text-red-400 text-center">
                          Sorry, there was an error sending your message. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}