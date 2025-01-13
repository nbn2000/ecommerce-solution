import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Package, ShieldCheck, Code } from 'lucide-react'

const benefitCards = [
  {
    title: "Easy Setup",
    description: "Register, define fields, and start immediately.",
    icon: Zap,
  },
  {
    title: "Powerful SKU Management",
    description: "Handle sizes, colors, and more without hassle.",
    icon: Package,
  },
  {
    title: "Shipping & Security Included",
    description: "Industry-standard features baked in.",
    icon: ShieldCheck,
  },
  {
    title: "Developer-Friendly",
    description: "Swagger documentation and API tokens ready for your team.",
    icon: Code,
  },
]

export default function KeyBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our Backend Solution?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitCards.map((card, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <card.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-center">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

