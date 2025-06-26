// components/Testimonials.tsx
import { Testimonial } from "@/lib/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="p-4 border rounded-lg shadow-md">
          <p className="italic text-black">{testimonial.quote}</p>
          <p className="mt-2 font-semibold">{testimonial.name}</p>
          <p className="text-sm text-black-500">{testimonial.company}</p>
        </div>
      ))}
    </div>
  );
}