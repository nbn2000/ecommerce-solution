import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your eCommerce Backend?
            </h2>
            <p className="text-xl mb-6">
              Join thousands of businesses that have streamlined their
              operations with our powerful, user-friendly platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100"
              >
                Sign Up Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-blue-600"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <Image
              src="/32.jpg"
              alt="Happy users dashboard"
              width={400}
              height={300}
              className="rounded-lg  shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
