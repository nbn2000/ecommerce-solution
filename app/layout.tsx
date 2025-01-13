import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechGigs - Simplifying eCommerce Backend Solutions",
  description:
    "TechGigs provides a powerful, easy-to-use platform that simplifies eCommerce backend management, including SDKU management, payment integrations, shipping, and secure transactions for both business owners and developers.",
  keywords:
    "eCommerce, backend solution, SDKU management, shipping, payment, API, Swagger, product management, developer tools",
  openGraph: {
    type: "website",
    title: "TechGigs - Simplifying eCommerce Backend Solutions",
    description:
      "TechGigs provides a powerful, easy-to-use platform that simplifies eCommerce backend management, including SDKU management, payment integrations, shipping, and secure transactions for both business owners and developers.",
    url: "https://yourwebsite.com",
    images: ["/32.jpg"], // Replace with the actual image path
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGigs - Simplifying eCommerce Backend Solutions",
    description:
      "TechGigs provides a powerful, easy-to-use platform that simplifies eCommerce backend management, including SDKU management, payment integrations, shipping, and secure transactions for both business owners and developers.",
    images: ["/32.jpg"], // Replace with the actual image path
    creator: "@TechGigs", // Replace with the actual Twitter handle
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
