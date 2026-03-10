"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Rosters", href: "/rosters" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsCollapsed(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isCollapsed ? -100 : 0,
          opacity: isCollapsed ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 theme-transition ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" 
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="text-2xl font-bold">
                <span className="text-foreground">Brand</span>
                <span className="text-foreground/60">Brokers</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-300 relative group font-medium"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  variant="outline" 
                  className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                  asChild
                >
                  <Link href="/book-call">Book a Call</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden py-4 space-y-4 border-t border-border"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-foreground hover:text-foreground/70 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                    asChild
                  >
                    <Link href="/book-call">Book a Call</Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Collapsed Menu Button - Right Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: isCollapsed ? 0 : 100,
          opacity: isCollapsed ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 right-6 z-50 flex items-center space-x-3"
      >
        {/* Theme Toggle for Collapsed State */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Collapsed Menu Overlay */}
        <AnimatePresence>
          {isOpen && isCollapsed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-0 bg-background/95 backdrop-blur-lg rounded-2xl p-6 min-w-[250px] border border-border shadow-xl"
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-foreground hover:text-foreground/70 transition-colors duration-300 py-2 group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <ChevronRight 
                        size={16} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-border"
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                    asChild
                  >
                    <Link href="/book-call">Book a Call</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}