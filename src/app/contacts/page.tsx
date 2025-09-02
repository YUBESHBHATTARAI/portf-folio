
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
 export const metadata: Metadata = {
   title:{
    absolute:"Contact Me ",
   } 

}



const links=[
    {
        name:"Facebook", url:"https://www.facebook.com/yubesh.bhattarai",img:"/Resume.png"
    },
    {
        name:"github", url:"https://www.facebook.com/yubesh.bhattarai",img:"/Resume.png"
    },
    {
        name:"linkedin", url:"https://www.facebook.com/yubesh.bhattarai",img:"/src/profile.png"
    },
    {
        name:"facebook", url:"https://www.facebook.com/yubesh.bhattarai",img:"/Resume.png"
    },
    {
        name:"reddit", url:"https://www.facebook.com/yubesh.bhattarai",img:"/skills/Js.png"
    },
    {
        name:"X", url:"https://www.facebook.com/yubesh.bhattarai",img:"/skills/Next.png"
    },
    {
        name:"X", url:"https://www.facebook.com/yubesh.bhattarai",img:"/skills/Next.png"
    },
    {
        name:"X", url:"https://www.facebook.com/yubesh.bhattarai",img:"/skills/Next.png"
    },
]
export default function Contacts() {


    return(
        <div className="mt-[4rem] md:mt-[5rem]  flex items-center justify-center pb-5">
         <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <div  className="mx-3 mt-[1em]  ring-2 ring-black  rounded-md px-4 py-6 w-[26rem] md:w-[40rem] lg:w-[58rem] flex flex-col items-center  bg-radial-[at_25%_25%] from-white to-zinc-500 to-95% ">
                <div>
                   <h1 className="text-[2rem] font-bold italic text-center uppercase  md:text-[4.5rem] lg:text-[6rem]  ">Contact Me </h1>
                   <p className="text-[1rem] font-bold italic text-center ">Feel free to connect me on my social media platforms</p>
                </div>
                <div className="">

                    {  
                     links.map((link ,index)=>(
                        
                             <Link key={index} href={link.url} >
                             <div className=" flex  ring ring-black px-4  py-2 rounded-md  my-2 gap-3  w-[20rem] md:w-[36rem] lg:w-[50rem]  ">
                                 <Image  className="rounded-full " src={link.img} alt="" width={30} height={30} />
                                   <h1 className=" text-lg italic font-[Inter] md:text-2xl lg:text-3xl hover:scale-96 transition-all duration-300 "> 
                                     Connect me with my
                                     <span className="font-semibold text-xl md:text-2xl lg:text-3xl hover:underline  "> {link.name}</span>  
                                      </h1>
                             </div>
                             </Link>

                        ))
                    }
                   
                </div>

             </div>
        </div>
    )
}