import Link from "next/link";
import Mobile from "./Mobile";




export default function Header(){

    return(

        <div className="h-16 md:h-20 fixed top-0 text-2xl z-50  w-full  not-first:flex items-center justify-between p-4   gap-8  md:justify-around border-b-2  bg-gray-300/40  backdrop-blur-[2px]   ">
            {/* logo */}
        <Link href="/" className=" hover:text-gray-400    ">
         <div className="text-4xl font-bold text-zinc-600 mx-6 hover:text-gray-400 hover:scale-120 transition-all duration-300 ease-in-out">
           y<span className=" text-3xl text-gray-700 italic hover:text-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">B</span>
         </div>
        </Link>


         {/* hamberger */}
         <div className="hidden md:flex flex-row items-center gap-5 font-mono">

            <Link href="/">Home</Link>
            <Link href="/about">about </Link>
            <Link href="/projects">projects</Link>
            <Link href="/contacts">contacts</Link>
        
        </div>

              {/* mobile view */}
       <div className="md:hidden ">
        <Mobile/>
       </div>
        </div>

    )
}