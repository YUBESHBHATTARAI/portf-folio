"use client";

import React,{useState} from 'react';
import Link from "next/link";

const mobile =[
  {id: 1, name: 'home ' , url: "/"},
  {id: 2, name: 'about ' , url: "/about"},
  {id: 3, name: 'skills ' , url: "/skills"},
  {id: 4, name: 'projects ' , url: "/projects"},
  {id: 5, name: 'contacts ' , url: "/contacts"}
]


export default function Mobile(){
  const[open,setOpen]=useState(false);

    
    return(

      <div className="w-40  md:hidden flex flex-col items-center justify-center top-1 right-12 z-50  absolute text-xl   backdrop-blur-[2px] mt-4  rounded-md   ">
          {open ? <span onClick={()=>setOpen(false)}>X</span> : <span onClick={()=>setOpen(true)}>≡</span>}
        
      
           {open &&   mobile.map((item)=>(
             <div key={item.id } className={` bg-white/75 bg-blur-[2px] py-4 flex flex-col justify-center items-center w-60 h-[5rem] gap-5 text-2xl  `}  onClick={()=>setOpen(false)} >  
           <Link  href={item.url}>{item.name}</Link>
           </div>
         ))}         
             </div>
          
      
    )
}
           
      
     
    