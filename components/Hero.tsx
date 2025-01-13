"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden"
    >
      {/* Hero Content with Animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-8 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-shadow-lg drop-shadow-lg">
          Revolutionize Your eCommerce Backend
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-8 text-shadow-md">
          Simplify SDKU, shipping, and security. Build faster, scale smarter,
          and focus only on your UI.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 text-lg shadow-md transition-transform transform hover:scale-105"
          >
            Get Started for Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg shadow-md transition-transform transform hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
