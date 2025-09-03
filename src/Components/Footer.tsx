import Link from "next/link"


export default function Footer(){

    return(

        <div className="  flex flex-col  left-0   p-3 px-5   gap-5 bg-gray-200">


                {/* parent div */}

         <div className=" flex flex-col   gap-3 md:flex-row md:justify-evenly     ">
            {/* logo */}
             {/* logo */}
        <Link href="/" className=" hover:text-gray-400    ">
         <div className="text-4xl font-bold text-zinc-600 mx-6 hover:text-gray-400 hover:scale-120 transition-all duration-300 ease-in-out">
           y<span className=" text-3xl text-gray-700 italic hover:text-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">B</span>
         </div>
        </Link>


          {/* nav links */}
         <div className=" flex flex-col  gap-4 md:text-center font-mono  ">
            <h1 className="text-xl font-bold font-serif ">Quick links</h1>
            <Link href="/" className=" hover:text-gray-600">Home</Link>
            <Link href="/about" className="hover:text-gray-600">about </Link>
            <Link href="/askMe" className="hover:text-gray-600">Ask me </Link>
            <Link href="/projects" className="hover:text-gray-600">projects</Link>
            <Link href="/contacts" className="hover:text-gray-600">contacts</Link>
          </div>


          {/* social links */}
          <div className="flex flex-col  gap-4  font-mono"  >
             <h1 className="text-xl md:text-center font-bold font-serif ">Social links</h1>
          <div className=" flex flex-row  gap-4 ">
           <Link href="https://www.facebook.com/yubesh.bhattarai">Facebook</Link>
           <Link href="https://github.com/YUBESHBHATTARAI">github</Link>
           <Link href="https://www.linkedin.com/in/yubesh-bhattarai-123456789/">linkedIn</Link>
           <Link href="https://www.instagram.com/yubesh.bhattarai/">instagram</Link>
          </div>
          </div>
          


          </div>

          <hr className="my-3 border-b-2 border-black "/>

         <div className="flex flex-col md: items-center italic  ">
              <span>  | {new Date().getFullYear()} | &copy; all rights reserved.</span>
              <span className="text-green-300"> @ yubesh bhattarai</span>
          </div>
    
         </div>
         
      



    )
}