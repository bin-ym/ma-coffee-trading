export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  specs?: Record<string, string | number>;
  gallery?: string[];
  category?: string;
  featured?: boolean;
  isNew?: boolean;
  price?: number;  // <-- Added price
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  company: string;
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Light roast, floral notes",
    image: "/images/yirgacheffe.jpg",
    isNew: true,
    price: 14.99,
    featured: true,
  },
  {
    id: 2,
    name: "Sidamo Guji",
    description: "Medium roast, fruity undertones",
    image: "/images/sidamo.jpg",
    price: 12.5,
    featured: false,
  },
  {
    id: 3,
    name: "Ethiopian Sidamo",
    description: "Rich aroma with berry flavors",
    image: "/images/sidamo.jpg",
    isNew: false,
    price: 13.75,
    featured: false,
  },
  {
    id: 4,
    name: "Ethiopian Yirgacheffe",
    description: "Light roast, floral notes",
    image: "/images/yirgacheffe.jpg",
    price: 14.99,
    isNew: true,
    featured: true,
  },
  {
    id: 5,
    name: "Sidamo Guji",
    description: "Medium roast, fruity undertones",
    image: "/images/sidamo.jpg",
    isNew: true,
    price: 12.5,
    featured: true,
  },
  {
    id: 6,
    name: "Ethiopian Sidamo",
    description: "Rich aroma with berry flavors",
    isNew: true,
    image: "/images/yirgacheffe.jpg",
    price: 13.75,
    // featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Smith",
    quote: "MA Coffee Trading's coffee is a game changer! Highly recommended.",
    company: "Coffee Lovers",
  },
  {
    id: 2,
    name: "Bob Johnson",
    quote: "I've never tasted coffee this good! The freshness is incredible.",
    company: "Java House",
  },
  {
    id: 3,
    name: "Catherine Lee",
    quote: "Exceptional quality and service. I order regularly!",
    company: "Brewed Awakenings",
  },
];
