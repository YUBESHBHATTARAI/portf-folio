import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="mt-[4rem] md:mt-[5rem] min-h-screen relative px-4 py-2  ">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Project Wrapper */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto ">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[30%] h-[60vh] bg-gray-100  p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            {item.img && (
              <div className="relative w-full h-[60%] mb-3 rounded-md overflow-hidden drop-shadow-lg/50 px-1  ">
                <Link href="/projects">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md transition-transform duration-300 hover:scale-110  "
                  />
                </Link>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-2 items-center text-center py-2 ">
              <h1 className="text-xl font-bold">
                <Link href="/Projects">{item.name}</Link>
              </h1>
              <p className="text-sm text-gray-600">
                {item.languages?.join(", ")}
              </p>
              <Link
                className="text-md font-semibold      text-black  px-4 py-2 rounded-md"
                href={item.url}
                target="_blank"
              >
               <button> {">"}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
