import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    description: "For small projects",
    price: "$0",
    features: [
      "Basic SKU management",
      "Limited API calls",
      "Community support",
      "Basic documentation",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing businesses",
    price: "$49",
    features: [
      "Advanced SKU management",
      "Unlimited API calls",
      "Priority support",
      "Full Swagger documentation",
      "Custom fields",
      "Advanced security features",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large-scale operations",
    price: "Custom",
    features: [
      "Fully customizable solution",
      "Dedicated support team",
      "Custom integrations",
      "On-premise deployment option",
      "Advanced analytics",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple Pricing for Every Business
        </h2>
        <div className="grid relative grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative${
                plan.popular ? "border-blue-500 border-2" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "shadow-sm rounded-lg border bg-card text-card-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-sm font-semibold rounded-bl">
                  Most Popular
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
