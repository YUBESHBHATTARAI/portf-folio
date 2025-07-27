// import {StaticImageData} from "next/image";
// import Link from "next/link";
// import Image from "next/image";

// export default function Slider({skills}:{skills:{src:StaticImageData ,url:string }[]}){


//     return(
//         <div className="max-w-[80vw] ">
//            <div className=" scroll_inner ">
//                {skills.map((skills,index)=>(
//                 <Link  key={index} href={skills.url}> 
//                 <Image   src={skills.src} alt={`skills ${index+1}`} height={100} />
                 
                 
                 
//                  </Link>
//                ))}
//            </div>
//         </div>
//     )
// }











"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { projects } from "@/data";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += 1; // slower scroll speed

      // Reset scroll when it reaches the end
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-screen  overflow-x-auto py-10">
      <div
        ref={containerRef}
        className="flex gap-6 w-max overflow-x-scroll scrollbar-hide"
      >
        {/* Double the items for infinite loop effect */}
        {[...projects, ...projects].map((item, index) => (
          <div
            key={index}
            className="min-w-[80vw] md:min-w-[50vw] lg:min-w-[33vw] h-[60vh] p-4 flex-shrink-0 flex flex-col items-center justify-center rounded-xl shadow-md bg-white"
          >
            <div className="relative w-full h-40 mb-4">
              <Link href="/projects">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </Link>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">
              <Link href="/projects">{item.name}</Link>
            </h2>
            <p className="text-sm text-gray-600 mb-2 text-center">
              {item.languages?.join(", ")}
            </p>
            <Link
              href={item.url}
              className="px-4 py-2 text-white rounded-md bg-gradient-to-tr from-gray-600 to-black/90 hover:opacity-90"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
