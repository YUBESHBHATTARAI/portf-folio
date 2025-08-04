"use client"
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import {useState, useEffect } from "react";
export default function Projects() {


 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000); // every 3 seconds

  return () => clearInterval(interval); // stop interval on unmount
}, []);

  

 
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My Projects</h1>
      <div className="  overflow-x-scroll text-stone-700 md:w-[76vw]  lg:w-[64vw]  mx-auto  ring ring-black  w-[95%] ">
      <div className=" w-max  gap-2   flex  items-center justify-center  ">
        
        {projects.map((item) => (
          <div key={item.id} className=" mx-auto w-[92vw] flex flex-col justify-center items-center h-[60vh] p-6 md:w-[55rem] lg:w-[24vw]  transition-all duration-500 ease-in-out   ">
            {item.img && (
              <div className="relative flex flex-1 w-full">
                  <Link href="/projects">
                  <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md shadow-md shadow-gray-500/50 transition-transform duration-300 hover:scale-110"
                /> </Link>
               
              </div>
            )}

            <div className="flex-1 flex flex-col gap-3 items-center justify-center    ">
              <h1 className="text-xl font-bold  "><Link href="/Projects">{item.name}</Link>      </h1>
              <p className="text-md ">{item.languages?.join(" ")}</p>
              <Link className="text-lg font-semibold bg-gradient-to-t from-gray-500 to-black/90 to-80% text-white  px-4 py-2 rounded-md" href={item.url}>{item.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
}
