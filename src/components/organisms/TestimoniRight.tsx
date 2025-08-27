"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { cardTestimoniData } from "../../data/cardTestimoni";

export default function TestimoniRight() {
  const testimonials = cardTestimoniData.map((item) => ({
    quote: item.description,
    name: item.name,
    title: item.year,
  }));
  return (
    <div className=" flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
