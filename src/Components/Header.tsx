import Link from "next/link";
import Mobile from "./Mobile";
import Resume from "./Resume";



export default function Header(){

    return(

        <div className="h-16 md:h-20 fixed top-0 text-2xl z-50  w-full  not-first:flex items-center justify-between  p-4   gap-8  md:justify-around border-b-2  bg-gray-300/40  backdrop-blur-[2px]   ">
            {/* logo */}
         <div className="text-xl md:text-3xl font-bold text-red-500 mx-6">
           YB
         </div>

         {/* hamberger */}
         <div className="hidden md:flex flex-row items-center gap-5  ">
         
            <Link href="/">Home</Link>
            <Link href="/about">about </Link>
            <Link href="/skills">skills</Link>
            <Link href="/projects">projects</Link>
            <Link href="/contacts">contacts</Link>
           <Resume/>
         
        </div>

              {/* mobile view */}
       <div className="md:hidden ">
        <Mobile/>
       </div>
        </div>

    )
}