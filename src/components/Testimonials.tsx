"use client";

import { testimonials } from "@/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-[calc(100vh-4rem)] px-4 py-16 sm:py-20 bg-gradient-to-b from-[#f7f3f0] to-[#fff] flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/coffee-pattern.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto animate-fade-in-down">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-30 text-center">
          🌟 What Our Customers Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={testimonial.id}
              className="flex flex-col items-center justify-between p-6 bg-white border border-[var(--primary)]/30 rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.03] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col justify-between w-full h-full">
                <p className="mb-4 text-base italic text-gray-700 sm:text-lg">
                  “{testimonial.quote}”
                </p>
                <div className="mt-auto text-center">
                  <p className="text-lg sm:text-xl font-semibold text-[var(--primary)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 sm:text-base">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}