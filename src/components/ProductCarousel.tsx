// src/components/ProductCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface ProductCarouselProps {
  images: string[];
  name: string;
}

export default function ProductCarousel({ images, name }: ProductCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full max-w-md overflow-hidden rounded-lg"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <Image
            src={src}
            alt={`${name} image ${i + 1}`}
            width={500}
            height={500}
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
