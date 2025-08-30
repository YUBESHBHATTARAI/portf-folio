"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CustomMarquee() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const items = [
    { id: 1, logo: "/skills/Html.png", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", text: "HTML", alt: "HTML Logo" },
    { id: 2, logo: "/skills/css.png", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", text: "CSS", alt: "CSS Logo" },
    { id: 3, logo: "/skills/c.png", url: "https://www.cprogramming.com/", text: "C", alt: "C Logo" },
    { id: 4, logo: "/skills/c++.png", url: "https://cplusplus.com/", text: "C++", alt: "C++ Logo" },
    { id: 5, logo: "/skills/tailwind.png", url: "https://www.tailwindcss.com", text: "Tailwind CSS", alt: "Tailwind CSS Logo" },
    { id: 6, logo: "/skills/Js.png", url: "https://www.javascript.com/", text: "JavaScript", alt: "JavaScript Logo" },
    { id: 7, logo: "/skills/react.png", url: "https://react.dev", text: "React", alt: "React Logo" },
    { id: 8, logo: "/skills/Next.png", url: "https://nextjs.org", text: "Next.js", alt: "Next.js Logo" },
    { id: 9, logo: "/skills/git.png", url: "https://git-scm.com/", text: "Git", alt: "Git Logo" },
    { id: 10, logo: "/skills/github.png", url: "https://www.github.com", text: "GitHub", alt: "GitHub Logo" },
  ];

  
  useEffect(() => {
    if (contentRef.current) {
      setScrollWidth(contentRef.current.offsetWidth);
    }
  }, []);


  useEffect(() => {
    if (!scrollWidth) return;

    const interval = setInterval(() => {
      setOffset((prev) => (prev <= -scrollWidth ? 0 : prev - 1)); 
    }, 20); 

    return () => clearInterval(interval);
  }, [scrollWidth]);

  return (
    <div className="overflow-hidden h-[120px] relative my-6 flex items-center justify-center w-[95%] md:w-[76vw] lg:w-[64vw] mx-auto bg-gray-50 rounded-xl shadow">
      <div
        className="flex absolute whitespace-nowrap"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {[...Array(2)].map((_, index) => (
          <div className="flex" key={index} ref={index === 0 ? contentRef : null}>
            {items.map((item) => (
              <Link
                key={`${item.id}-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center justify-center mx-6 min-w-[80px] max-w-[100px]  transition-colors duration-300  p-2">
                  <div className="relative w-[8vw] h-[8vw] min-w-[70px] min-h-[70px] max-w-[100px] max-h-[100px] rounded-full border bg-white shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300">
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 70px, 8vw"
                    />
                  </div>
                 
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
