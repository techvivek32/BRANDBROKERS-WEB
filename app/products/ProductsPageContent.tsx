"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Package, ExternalLink, ShoppingCart } from "lucide-react";
import { Product } from "@/types";

export default function ProductsPageContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

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
              Our Products
            </h1>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Discover our digital products and services designed to help brands 
              succeed in the digital marketplace and accelerate their growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                    <Package className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-foreground/60 mb-4">{product.description}</p>
                    
                    {product.price && (
                      <div className="text-2xl font-bold gradient-text mb-4">
                        {product.price}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    {product.link ? (
                      <Button asChild className="w-full">
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {product.price ? (
                            <>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Purchase
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Learn More
                            </>
                          )}
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-foreground/40 mx-auto mb-4" />
              <p className="text-foreground/60 text-lg">No products available at the moment.</p>
              <p className="text-foreground/50 text-sm mt-2">Check back soon for exciting new offerings!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Need Something Custom?
              </h2>
              <p className="text-xl text-foreground/60 mb-8">
                Don't see what you're looking for? We create custom solutions 
                tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Discuss Custom Solution</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/book-call">Schedule Consultation</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}