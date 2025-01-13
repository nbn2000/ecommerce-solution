"use client";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <Image
              src="/logo-white-word.webp"
              alt="Happy users dashboard"
              width={150}
              height={50}
            />
            <p className="text-lg text-gray-300">
              Revolutionizing eCommerce backend solutions for businesses.
            </p>
          </div>
          <div className="flex gap-6 mt-6 sm:mt-0 justify-center sm:justify-start">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-8 h-8 text-white hover:text-blue-600 transition-colors" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-8 h-8 text-white hover:text-blue-400 transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8 text-white hover:text-blue-700 transition-colors" />
            </a>
            <a href="#" aria-label="GitHub">
              <Github className="w-8 h-8 text-white hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="hero" smooth={true} offset={-70} duration={500}>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Hero
            </Button>
          </Link>
          <Link to="features" smooth={true} offset={-70} duration={500}>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Features
            </Button>
          </Link>
          <Link to="pricing" smooth={true} offset={-70} duration={500}>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Pricing
            </Button>
          </Link>
          <Link to="faq" smooth={true} offset={-70} duration={500}>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              FAQ
            </Button>
          </Link>
          <Link to="testimonials" smooth={true} offset={-70} duration={500}>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Testimonials
            </Button>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 TechGigs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
