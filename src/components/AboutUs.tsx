import Image from "next/image";
import Link from "next/link";

import about from "@/assets/image/ethiopian-coffee-farm.jpg";
import Sustainability from "@/assets/image/Sustainability.svg";
import Quality from "@/assets/image/quality-icon.svg";
import Heritage from "@/assets/image/heritage-icon.svg";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 to-transparent z-0" /> */}
      {/* Background Image with Overlay */}
      <div className="absolute w-full h-full">
        <Image
          src={about}
          alt="Ethiopian coffee farm background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 to-transparent" /> */}
      </div>

      {/* Centered Content */}
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-8 tracking-tight animate-fade-in-down">
          Our Story
        </h2>
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl text-black  leading-relaxed mb-4 animate-fade-in-up animation-delay-200">
          At{" "}
          <span className="font-semibold text-[var(--primary)]">
            MA Coffee Trading PLC
          </span>
          , we bring the rich, authentic flavors of Ethiopian coffee to the
          world. Partnering directly with local farmers, we ensure every bean is
          ethically sourced and crafted with care.
        </p>
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl text-black leading-relaxed mb-8 animate-fade-in-up animation-delay-400">
          Our mission is to share the heritage and quality of Ethiopian coffee,
          one cup at a time.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl w-full">
          <div
            className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-md coffee-card group relative overflow-hidden transition-all duration-500 animate-coffee-pour"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 coffee-ripple" />
            <div className="w-14 h-14 mb-4 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:animate-ripple">
              <Image
                src={Sustainability}
                alt="Sustainability icon"
                width={100}
                height={100}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 relative z-10">
              Sustainability
            </h3>
            <p className="text-gray-600 relative z-10">
              We promote eco-friendly farming and fair trade, ensuring a better
              future for farmers and the environment.
            </p>
          </div>
          <div
            className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-md coffee-card group relative overflow-hidden transition-all duration-500 animate-coffee-pour"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 coffee-ripple" />
            <div className="w-14 h-14 mb-4 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:animate-ripple">
              <Image
                src={Quality}
                alt="Quality icon"
                width={100}
                height={100}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 relative z-10">
              Quality First
            </h3>
            <p className="text-gray-600 relative z-10">
              Every bean is carefully selected, roasted, and packed to deliver
              the authentic flavors of Ethiopian coffee.
            </p>
          </div>
          <div
            className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-md coffee-card group relative overflow-hidden transition-all duration-500 animate-coffee-pour"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 coffee-ripple" />
            <div className="w-14 h-14 mb-4 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:animate-ripple">
              <Image
                src={Heritage}
                alt="Heritage icon"
                width={100}
                height={100}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 relative z-10">
              Our Heritage
            </h3>
            <p className="text-gray-600 relative z-10">
              Rooted in Ethiopia’s coffee-growing tradition, we honor centuries
              of expertise in every cup.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        {/* <Link
          href="/about"
          className="mt-8 inline-block coffee-button text-lg sm:text-xl animate-fade-in-up animation-delay-800"
          aria-label="Learn more about MA Coffee Trading PLC"
        >
          Learn More
        </Link> */}
      </div>
    </section>
  );
}
