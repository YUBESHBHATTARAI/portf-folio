"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CustomMarquee() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const items = [
      {id:1, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:2, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:3, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:4, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:5, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:6, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:7, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:8, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
      {id:9, logo:"/skills/C.png", url:"https://www.cprogramming.com/", text:"C Programming" , alt:"C Programming"},
  ];

  // Measure full width of one loop of content
  useEffect(() => {
    if (contentRef.current) {
      setScrollWidth(contentRef.current.offsetWidth);
    }
  }, []);

  // Move left each interval
  useEffect(() => {
    if (!scrollWidth) return;

    const interval = setInterval(() => {
      setOffset((prev) => (prev <= -scrollWidth ? 0 : prev - 1));
    }, 20); // smaller = faster

    return () => clearInterval(interval);
  }, [scrollWidth]);

  return (
    <div className="overflow-hidden  h-[100px] bg-gray-100 relative my-4 flex items-center justify-center gap-2 w-[95%]  md:w-[76vw]  lg:w-[64vw] mx-auto  ">
      <div
        className="flex absolute whitespace-nowrap"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {/* Repeat content twice for seamless loop */}
        <div className="flex" ref={contentRef}>
          {items.map((items) => (
            <span
              key={items.id}
              className="text-xl font-bold  mx-5"
            >
              <Link href={items.url}>
              <Image src={items.logo} alt={items.alt} height={20} width={20}/>
              </Link>
            </span>
          ))}
        </div>
        <div className="flex">
          {items.map((items) => (
            <span
              key={`clone-${items.id}`}
              className="text-xl font-bold mx-5"
            >
           <Link href={items.url}>
              <Image src={items.logo} alt={items.alt} height={20} width={20}/>
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
