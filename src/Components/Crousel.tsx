"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const items = [
  { id: 1, title: "HTML", img: "/skills/Html.png" },
  { id: 2, title: "CSS", img: "/skills/C.png" },
  { id: 3, title: "JavaScript", img: "/skills/Js.png" },
  { id: 4, title: "React", img: "/skills/React.png" },
  { id: 5, title: "Tailwind", img: "/skills/Tailwind.png" },
  { id: 5, title: "Tailwind", img: "/skills/Tailwind.png" },
  { id: 5, title: "Tailwind", img: "/skills/Tailwind.png" },
  { id: 5, title: "Tailwind", img: "/skills/Tailwind.png" },
  // Add more if needed
];

export default function AutoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const scrollStep = 1; // scroll 1px per frame
  const scrollInterval = 1; // every 10ms for smoothness

  let scrolling = true;

  const interval = setInterval(() => {
    if (!scrolling) return;

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" }); // Reset to start
    } else {
      container.scrollBy({ left: scrollStep, behavior: "smooth" }); // Scroll right slowly
    }
  }, scrollInterval);

  return () => {
    clearInterval(interval);
    scrolling = false;
  };
}, []);


  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory px-4 py-6"
    >
      <div className="flex gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] snap-center shrink-0 rounded-2xl shadow-md bg-white p-4 text-center"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className="mx-auto mb-2"
            />
            <p className="text-sm font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
