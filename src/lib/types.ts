// lib/types.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  company: string;
}

export interface News {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}