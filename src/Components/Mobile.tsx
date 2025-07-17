"use client";

import React,{useState} from 'react';
import Link from "next/link";

export default function Mobile(){
  const[open,setOpen]=useState(false);

    
    return(

      <div className="  md:hidden flex flex-col items-center justify-center top-4 right-12 z-10  absolute text-xl w-44    ">
           <button onClick={() => setOpen(!open)}>{open ? "off" : "On"}</button>
             <div className={` bg-white/75 bg-blur-[2px] py-4 flex flex-col justify-center items-center w-40 h-[18rem] gap-5 text-2xl  ${open ? "block" : "hidden"}`}>
               <Link href="/">Home</Link>
               <Link href="/about">about </Link>
               <Link href="/skills">skills</Link>
               <Link href="/projects">projects</Link>
               <Link href="/contacts">contacts</Link>
           </div>
       </div>
    )
}
           
           
     
    