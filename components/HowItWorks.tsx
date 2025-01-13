import { CheckCircle } from 'lucide-react'

const steps = [
  {
    title: "Register & Define Your Product Fields",
    description: "e.g., name, description, price, SKU, payment, shipping",
  },
  {
    title: "Get API Documentation",
    description: "Swagger with token ready for your developers",
  },
  {
    title: "Focus on Your UI",
    description: "We handle the backend complexity while you focus on the user experience",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          3 Simple Steps to Get Started
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 inset-y-0 w-0.5 bg-blue-200 md:left-1/2 md:-ml-0.5"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center mb-8 md:mb-16">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold z-10 md:absolute md:left-1/2 md:-ml-4">
                {index + 1}
              </div>
              <div className={`ml-6 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Illustration */}
        <div className="mt-16 flex justify-center">
          <svg width="600" height="200" viewBox="0 0 600 200" className="max-w-full">
            <rect x="50" y="20" width="150" height="60" rx="5" fill="#EDF2F7" stroke="#4A5568" strokeWidth="2"/>
            <text x="125" y="55" textAnchor="middle" fill="#4A5568" fontSize="14">Register</text>
            
            <rect x="225" y="20" width="150" height="60" rx="5" fill="#EDF2F7" stroke="#4A5568" strokeWidth="2"/>
            <text x="300" y="55" textAnchor="middle" fill="#4A5568" fontSize="14">API Docs</text>
            
            <rect x="400" y="20" width="150" height="60" rx="5" fill="#EDF2F7" stroke="#4A5568" strokeWidth="2"/>
            <text x="475" y="55" textAnchor="middle" fill="#4A5568" fontSize="14">UI Focus</text>
            
            <line x1="200" y1="50" x2="225" y2="50" stroke="#4A5568" strokeWidth="2"/>
            <line x1="375" y1="50" x2="400" y2="50" stroke="#4A5568" strokeWidth="2"/>
            
            <circle cx="212.5" cy="50" r="5" fill="#48BB78"/>
            <circle cx="387.5" cy="50" r="5" fill="#48BB78"/>
            
            <path d="M50 120 Q300 180 550 120" fill="none" stroke="#4A5568" strokeWidth="2" strokeDasharray="5,5"/>
            <text x="300" y="190" textAnchor="middle" fill="#4A5568" fontSize="14">Streamlined Process</text>
          </svg>
        </div>
      </div>
    </section>
  )
}

