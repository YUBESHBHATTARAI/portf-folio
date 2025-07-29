import Link from "next/link"


export default function Footer(){

    return(

        <div className="  flex flex-col  left-0   p-3 px-5   gap-5 bg-gray-200">


                {/* parent div */}

         <div className=" flex flex-col   gap-3 md:flex-row md:justify-evenly     ">
            {/* logo */}
         <div className="text-xl md:text-3xl font-bold text-red-500 mx-4 ">

             YB
         </div>


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
           <Link href="/facebook">Facebook</Link>
           <Link href="/github">github</Link>
           <Link href="/linkedin">linkedIn</Link>
           <Link href="/instagram">insta</Link>
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