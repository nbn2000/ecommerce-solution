"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does SKU management work?",
    answer:
      "Our SKU management system allows you to easily create, organize, and track your product variants. You can define attributes like size, color, and material, and our system will automatically generate SKUs. It's flexible enough to handle simple products or complex items with multiple variations.",
  },
  {
    question: "Can I integrate my existing eCommerce store?",
    answer:
      "Yes, absolutely! Our platform is designed to be integration-friendly. We provide robust APIs and detailed documentation to help you seamlessly connect your existing eCommerce store. Whether you're using Shopify, WooCommerce, or a custom solution, our team can guide you through the integration process.",
  },
  {
    question: "Is the platform secure for payment and shipping?",
    answer:
      "Security is our top priority. We use industry-standard encryption for all data transmissions and storage. Our payment processing is PCI DSS compliant, and we partner with trusted shipping providers to ensure your logistics are secure and reliable. We also regularly conduct security audits and updates to stay ahead of potential threats.",
  },
  {
    question: "Do you offer developer support?",
    answer:
      "We provide comprehensive developer support. This includes detailed API documentation, Swagger interface for easy API exploration, developer forums, and direct support from our technical team. We're committed to making sure your developers have everything they need to succeed with our platform.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="multiple"
          value={openItems}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
