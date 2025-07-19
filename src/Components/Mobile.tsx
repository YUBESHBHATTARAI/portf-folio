"use client";

import React,{useState} from 'react';
import Link from "next/link";
import Resume from "./Resume";

const mobile =[
  {id: 1, name: 'home ' , url: "/"},
  {id: 2, name: 'about ' , url: "/about"},
  {id: 3, name: 'projects ' , url: "/projects"},
  {id: 4, name: 'contacts ' , url: "/contacts"},
  
]

export default function Mobile(){
  const[open,setOpen]=useState(false);

    
    return(

      <div className="w-40  md:hidden flex flex-col items-center justify-center top-1 right-12 z-50  absolute text-xl  bg-blur-[5px]   mt-4  rounded-md   ">
          {open ? <span className='text-xl flex justify-end w-1  ' onClick={()=>setOpen(false)}>X</span> : <span  className="text-xl flex  items-center justify-end font-bold "onClick={()=>setOpen(true)}>≡</span>}
        
      
           {open &&   mobile.map((item)=>(
             <div key={item.id } className={`  py-4 flex flex-col justify-center items-center w-60 bg-white/80  backdrop-blur-[2px] gap-5 text-2xl h-[5rem]  `}  onClick={()=>setOpen(false)} >  
           <Link  href={item.url}>{item.name}
         
            </Link>
           </div>
         ))}         
         
             </div>
          
      
    )
}
           
      
     
    