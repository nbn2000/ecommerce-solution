import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";

const features = [
  { name: "Dynamic SKU Management", traditional: false, ourSolution: true },
  {
    name: "Seamless Payment Integrations",
    traditional: false,
    ourSolution: true,
  },
  {
    name: "Secure & Reliable Shipping Modules",
    traditional: false,
    ourSolution: true,
  },
  {
    name: "Scalable & Customizable Fields",
    traditional: false,
    ourSolution: true,
  },
  { name: "Swagger API Documentation", traditional: false, ourSolution: true },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          A Backend Built for Modern eCommerce
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Feature</TableHead>
                <TableHead className="text-center">
                  Traditional Solution
                </TableHead>
                <TableHead className="text-center">Our Solution</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.traditional ? (
                      <CheckCircle className="inline-block w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="inline-block w-6 h-6 text-red-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.ourSolution && (
                      <CheckCircle className="inline-block w-6 h-6 text-green-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Our solution provides a comprehensive set of features designed
            specifically for modern eCommerce needs, offering flexibility,
            security, and developer-friendly tools out of the box.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More About Our Features
          </button>
        </div>
      </div>
    </section>
  );
}
