"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function BookCallContent() {
  const benefits = [
    "Free 30-minute strategy consultation",
    "Personalized marketing assessment",
    "Custom growth recommendations",
    "No commitment required",
    "Expert insights and advice",
    "Clear next steps outlined",
  ];

  const callTypes = [
    {
      title: "Strategy Consultation",
      duration: "30 minutes",
      description: "Perfect for discussing your marketing goals and getting expert advice on strategy.",
      icon: Users,
      popular: true,
    },
    {
      title: "Deep Dive Session",
      duration: "60 minutes",
      description: "Comprehensive review of your current marketing efforts and detailed recommendations.",
      icon: Clock,
      popular: false,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Book a Strategy Call
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your marketing? Schedule a free consultation with our experts 
              and discover how we can help accelerate your brand's growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {callTypes.map((callType, index) => {
              const IconComponent = callType.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`relative p-8 h-full ${callType.popular ? 'border-primary' : ''}`}>
                    {callType.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{callType.title}</h3>
                        <p className="text-primary font-medium">{callType.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{callType.description}</p>
                    
                    <Button className="w-full">
                      Schedule {callType.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">What You'll Get</h2>
                <p className="text-gray-400">
                  Our strategy calls are designed to provide maximum value and actionable insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Calendar Integration Placeholder */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-12">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Ready to Schedule?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose a time that works best for you. We'll send you a calendar invite with all the details.
              </p>
              
              {/* Placeholder for calendar integration */}
              <div className="bg-secondary/20 rounded-lg p-8 mb-8">
                <p className="text-gray-400 mb-4">
                  Calendar integration will be added here (Calendly, Cal.com, or Google Calendar)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="p-3 bg-white/5 rounded">Mon 9:00 AM</div>
                  <div className="p-3 bg-white/5 rounded">Tue 2:00 PM</div>
                  <div className="p-3 bg-white/5 rounded">Wed 10:00 AM</div>
                  <div className="p-3 bg-white/5 rounded">Thu 3:00 PM</div>
                </div>
              </div>

              <Button size="lg">
                Select Time Slot
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}