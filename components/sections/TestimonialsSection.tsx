"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error(err));
  }, []);

  // Fallback testimonials for demo
  const fallbackTestimonials = [
    {
      name: "Sarah Williams",
      company: "TechStart Inc.",
      review: "Brand Brokers transformed our digital presence completely. Their strategic approach and creative campaigns resulted in a 300% increase in our online engagement and significantly boosted our sales.",
      rating: 5,
      image: "/testimonial-1.jpg",
    },
    {
      name: "Michael Chen",
      company: "EcoLife Products",
      review: "Working with Brand Brokers was a game-changer for our brand. Their influencer marketing campaigns helped us reach our target audience authentically and drove incredible results.",
      rating: 5,
      image: "/testimonial-2.jpg",
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      review: "The team at Brand Brokers understands our industry inside and out. Their data-driven approach and creative excellence have made them an invaluable partner for our growth.",
      rating: 5,
      image: "/testimonial-3.jpg",
    },
  ];

  const testimonialsToShow = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section className="section-padding theme-transition">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with Brand Brokers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToShow.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/60 mb-6 italic">"{testimonial.review}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mr-4">
                    <div className="w-10 h-10 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}