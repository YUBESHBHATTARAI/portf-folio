import {projects} from "@/data"
import Image from "next/image";
import Link from "next/link";



export default function ProjectsPage (){


    return (
        <div className=" mt-[4rem] md:mt-[5rem] flex flex-col md:flex-row items-center justify-center flex-wrap min-h-screen  ">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {projects.map((project)=>(
                <div key={project.id} className="  even:bg-gray-50  odd:bg-white/80  w-screen flex flex-col justify-center items-center h-[60vh] p-3 md:w-[48vw] lg:w-[33vw]  ">

                    <div className=" relative h-[60%] w-full rounded-xl  shadow-lg  p-2">
                    {project.img && (
                        <Image src={project.img} alt={project.name} fill className="rounded-lg shadow-lg hover:scale-104  transition-all duration-250  " />
                    )}
                    </div>
                     
                     <div className="bg-white  p-2  flex flex-col items-center  justify-center py-2 my-1 shadow-md   ">
                        <h1 className=" font-bold font-[inter] text-2xl text-center "> {project.name}</h1>
                        <p className=" font-bold font-[inter] text-center">{project.desc}</p>
                        <p className=" font-bold font-[inter] ">{project.languages?.join(", ")}</p>
                        <Link  className=" font-bold font-[inter] "href={project.url}>

                        <button>
                            {project.name}
                        </button>
                        </Link>
                     </div>

                </div>





            
            ))}



        </div>
    )
}