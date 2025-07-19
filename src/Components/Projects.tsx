import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
export default function Projects() {
  return (
    <div className="w-screen  overflow-x-scroll text-stone-700 bg-fuchsia-50   ">
      <div className=" w-max flex gap-2  ">
        {projects.map((item) => (
          <div key={item.id} className="w-screen flex flex-col justify-center items-center h-[60vh] p-6 md:w-[50vw] lg:w-[33vw]   ">
            {item.img && (
              <div className="relative flex flex-1 w-full">
                  <Link href="/projects">
                  <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md shadow-md shadow-gray-500/50 "
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
  );
}
