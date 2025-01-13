import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Setting up our store's backend has never been easier!",
    author: "Jane Doe",
    role: "Business Owner",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote: "Swagger documentation made it a breeze for our developers.",
    author: "John Smith",
    role: "Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote: "It's saved us countless hours!",
    author: "Emily Brown",
    role: "Startup Founder",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardContent className="flex flex-col h-full p-6">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 flex-grow">
                  <p className="text-lg text-gray-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="flex items-center mt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.author}`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
