"use client";
import { useState } from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo-white-word.webp"
            alt="Happy users dashboard"
            width={100}
            height={50}
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
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
        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 py-4">
          <div className="flex flex-col items-center space-y-4">
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
        </div>
      )}
    </nav>
  );
}
