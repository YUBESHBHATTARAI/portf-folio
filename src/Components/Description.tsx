;
import Image from "next/image";
import Link from "next/link";


export default function Description(){

    return(
        <div className="   mt-[4rem] md:mt-[5rem] flex flex-col items-center md:flex-row md:justify-evenly  md:items-start  text-justify  ">
            {/* bg-color  */}
         <div className="absolute inset-0 -z-10 size-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
            {/* text section */}
           <div className="order-2 md:order-1  my-3 mx-3 shadow-md py-4 px-2  h-[30vh] w-full md:h-[38vh] md:w-[65vw] md:rounded-md md:text-lg lg:h-[36vh] lg:w-[39vw]  2xl:h-[35vh] 2xl:w-[38vw]  lg:rounded-md lg:text-2xl lg:space-y-4   ">
                <span  className=" flex justify-center font-bold text-center text-xl font-mono text-gray-600">Hi !'m</span>
               <h1 className="font-bold text-center text-3xl text-stone-800"><span className="text-4xl text-stone-800">YUBESH</span> BHATTARAI</h1>
               <p className="text-center md:text-2xl">   <span className="text-2xl md:text-3xl  text-gray-600 font-bold lg:my-2">web developer </span> <br />  </p>
               <div className="flex justify-center  mt-2 mx-5 ">
               <button className="text-poppins font-bold bg-gradient-to-r from-gray-600 to-black/60 to-90% text-white px-3 py-2  rounded-md  mt-2 mx-5 md:text-xl  ">
                <Link href="/Resume.png">Resume </Link>
               </button>
               <button className="font-[Outfit] font-bold bg-gradient-to-l from-stone-600 to-black/70 to-60% text-white px-3 py-2  rounded-md  mt-2 mx-5 md:text-xl  ">
                <Link href="/contact ">Contact me 📞 </Link>
               </button>
               </div>
           </div>
           {/* img section */}
 

{/* img section */}
<div className="relative aspect-square w-[40vw] md:w-[30vw] lg:w-[15vw] order-1 md:order-2 mt-1 rounded-full overflow-hidden shadow-xl shadow-blue-500/75 bg-blue-400">
  <Image
    src="/profile.jpg"
    alt="Profile"
    fill
    className="object-cover rounded-full p-3"
  />
</div>

        </div>
    )
}


