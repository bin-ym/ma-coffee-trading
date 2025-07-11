import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutUs />
      <FeaturedProducts /> 
      <Testimonials />  
    </main>
  );
}
