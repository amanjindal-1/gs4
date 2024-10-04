"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Arrow from "@/public/Arrow";
import { useEffect, useState } from "react";
import MemberCard from "./Cards/MemberCard";
import ServiceCard from "./Cards/ServiceCard";

const cardFn = (type, item, isLast, black) => {
  switch (type) {
    case "service":
      return <ServiceCard item={item} isLast={isLast} black={black} />;
    case "consultant":
      return <MemberCard item={item} isLast={isLast} />;
  }
};

export function CarouselComponent({ title, items, card, black }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (api) {
      api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }
  }, [api]);

  return (
    <div className="relative py-10 md:py-16">
      <div className="w-full flex items-center justify-between gap-2.5 pb-12 text-4xl font-bold">
        <h3>{title}</h3>
        <div className="flex gap-2.5">
          <button
            onClick={() => api.scrollPrev()}
            className={`flex items-center justify-center h-10 w-10 rounded-full transition duration-200 ${
              black ? "hover:bg-[#c592637e]" : "hover:bg-black"
            }`}
          >
            <Arrow {...(black ? { color: "#000" } : {})} />
          </button>
          <button
            onClick={() => api.scrollNext()}
            className={`flex items-center justify-center h-10 w-10 rounded-full transition duration-200 rotate-180 ${
              black ? "hover:bg-[#c592637e]" : "hover:bg-black"
            }`}
          >
            <Arrow {...(black ? { color: "#000" } : {})} />
          </button>
        </div>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className={`basis-auto`}>
              {cardFn(card, item, index == items.length - 1, black)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
