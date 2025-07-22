"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect , useRef}  from "react";

const skills=[
    {id:1,
        name:"HTML",
        img:"/skills/HTML.png"
    },
    {id:2,
        name:"C",
        img:"/skills/C.png"
    },
    {id:3,
        name:"JavaScript",
        img:"/skills/Js.png"
    },
    
    {id:5,
        name:"Next.js",
        img:"/skills/Next.png"
    },
    
    {id:7,
        name:"C++",
        img:"/skills/C++.png"
    },
    {id:7,
        name:"C++",
        img:"/skills/profile.jpg"
    },
    {id:7,
        name:"C++",
        img:"/skills/profile.jpg"
    },
    {id:7,
        name:"C++",
        img:"/skills/profile.jpg"
    },
    {id:7,
        name:"C++",
        img:"/skills/profile.jpg"
    },
 
]





export default function Skills(){
  

    return(
        <div className=" flex overflow-x-scroll  shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6  w-screen max-w-sm    ">
              <h1 className="text-4xl text-center text-red-600  font-bold py-3 ">Skills</h1>
          {skills.map((i)=>(
            <div key={i.img} >
                <div className=" ">
                    <Image  src={i.img} alt={i.name} height={800} width={800} />
                </div>
            </div>
          ))}

 



            
            
            
        </div>
    )
}