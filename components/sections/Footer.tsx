"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Digital Marketing", href: "/services#digital-marketing" },
      { name: "Influencer Marketing", href: "/services#influencer-marketing" },
      { name: "Social Media", href: "/services#social-media" },
      { name: "Talent Management", href: "/services#talent-management" },
    ],
    resources: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "/resources" },
      { name: "Company Deck", href: "/company-deck" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border theme-transition">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-3xl font-bold mb-6 block">
                <span className="text-foreground">Brand</span>
                <span className="text-foreground/60">Brokers</span>
              </Link>
              <p className="text-foreground/60 mb-8 max-w-md leading-relaxed">
                Transforming brands through innovative marketing strategies, 
                authentic influencer partnerships, and data-driven growth solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-center text-foreground/60 hover:text-foreground transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mr-4" />
                  <span>hello@brandbrokers.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-foreground/60 hover:text-foreground transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-foreground/60 hover:text-foreground transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mr-4" />
                  <span>123 Marketing Street, New York, NY 10001</span>
                </motion.div>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "https://instagram.com/brandbrokers" },
                  { icon: Twitter, href: "https://twitter.com/brandbrokers" },
                  { icon: Linkedin, href: "https://linkedin.com/company/brandbrokers" },
                  { icon: Youtube, href: "https://youtube.com/brandbrokers" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5 text-foreground" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-foreground text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-foreground text-lg">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-foreground text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} Brand Brokers. All rights reserved.
          </p>
          
          <div className="flex space-x-8 mt-4 md:mt-0">
            {footerLinks.legal.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}