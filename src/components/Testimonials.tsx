// components/Testimonials.tsx
import { Testimonial } from "@/lib/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="p-4 border rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
          <p className="mt-2 font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.company}</p>
        </div>
      ))}
    </div>
  );
}