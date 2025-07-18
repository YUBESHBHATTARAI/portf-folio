;
import Image from "next/image";
import Link from "next/link";


export default function Description(){

    return(
        <div className=" h-[calc(100vh-5rem)]  mt-[4rem] md:mt-[5rem] flex flex-col items-center md:flex-row md:justify-evenly  md:items-start  text-justify ">
            {/* bg-color  */}
         <div className="absolute inset-0 -z-10 size-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
            {/* text section */}
           <div className="order-2 md:order-1  my-3 mx-3 shadow-md py-4 px-2   h-[25vh] w-full md:h-[30vh] md:w-[55vw] md:rounded-md md:text-xl lg:h-[34vh] lg:w-[37vw] lg:rounded-md lg:text-2xl lg:space-y-4   ">
               <h1 className="font-bold text-center text-3xl ">YUBESH BHATTARAI</h1>
               <p className="text-center md:text-2xl"> A passionate <span className="text-2xl md:text-3xl  text-gray-600 font-bold lg:my-2">web developer </span> <br /> and a never give up attitude </p>
               <div className="flex justify-center  mt-2 mx-5 ">
               <button className="text-poppins font-bold bg-blue-600 text-white px-3 py-2  rounded-md  mt-2 mx-5 md:text-xl  ">
                <Link href="/about ">Learn more </Link>
               </button>
               <button className="font-[Outfit] font-bold bg-blue-600 text-white px-3 py-2  rounded-md  mt-2 mx-5 md:text-xl  ">
                <Link href="/contact ">contact me </Link>
               </button>
               </div>
           </div>
           {/* img section */}
        <div className="relative h-[25vh] w-[45vw] md:h-[28vh] md:w-[28vw] lg:h-[30vh] lg:w-[15vw] order-1 md:order-2 bg-blue-400 rounded-full mt-1 shadow-xl shadow-blue-500/75 md:rounded-full ">
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


